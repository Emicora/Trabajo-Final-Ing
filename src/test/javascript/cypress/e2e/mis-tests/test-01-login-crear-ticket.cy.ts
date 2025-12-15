/**
 * Test E2E 1: Login y Crear Ticket
 * Este test realiza login mediante la interfaz y crea un ticket navegando por la UI
 */

import { entityCreateButtonSelector, entityCreateSaveButtonSelector } from '../../support/entity';
import { usernameLoginSelector, passwordLoginSelector, submitLoginSelector } from '../../support/commands';

describe('Test 1: Login y Crear Ticket', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const ticketTitle = 'Ticket Test E2E - Navegación';
  const ticketDescription = 'Descripción del ticket de prueba para navegación E2E';
  const ticketStatus = 'OPEN';
  const ticketType = 'BUG';
  const ticketPriority = 'HIGH';
  const ticketPageUrl = '/ticket';
  const loginPageUrl = '/login';

  beforeEach(() => {
    // Configurar intercepts antes de cualquier acción
    cy.intercept('GET', '/api/tickets+(?*|)').as('getTickets');
    cy.intercept('POST', '/api/tickets').as('createTicket');
    cy.intercept('POST', '/api/authenticate').as('authenticate');
  });

  it('debe hacer login y crear un ticket navegando por la interfaz', () => {
    // Paso 1: Navegar a la página de login
    cy.visit(loginPageUrl);
    cy.url().should('include', '/login');

    // Paso 2: Realizar login mediante la interfaz
    cy.get(usernameLoginSelector).should('be.visible').type(username);
    cy.get(passwordLoginSelector).should('be.visible').type(password);
    cy.get(submitLoginSelector).should('be.visible').click();

    // Esperar a que se complete el login
    cy.wait('@authenticate').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Verificar que el login fue exitoso (debería redirigir a home)
    cy.url().should('not.include', '/login');

    // Paso 3: Navegar a la página de tickets
    cy.visit(ticketPageUrl);
    cy.url().should('include', '/ticket');

    // Esperar a que cargue la lista de tickets
    cy.wait('@getTickets').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 4: Hacer clic en el botón de crear ticket
    cy.get(entityCreateButtonSelector).should('be.visible').click();

    // Verificar que se muestra el formulario de creación
    cy.getEntityCreateUpdateHeading('Ticket').should('be.visible');
    cy.url().should('include', '/ticket/new');

    // Paso 5: Llenar el formulario con los datos del ticket
    cy.get('[data-cy="title"]').should('be.visible').clear().type(ticketTitle);
    cy.get('[data-cy="title"]').should('have.value', ticketTitle);

    cy.get('[data-cy="description"]').should('be.visible').clear().type(ticketDescription);
    cy.get('[data-cy="description"]').should('have.value', ticketDescription);

    cy.get('[data-cy="status"]').should('be.visible').select(ticketStatus);
    cy.get('[data-cy="type"]').should('be.visible').select(ticketType);
    cy.get('[data-cy="priority"]').should('be.visible').select(ticketPriority);

    // Paso 6: Guardar el ticket
    cy.get(entityCreateSaveButtonSelector).should('be.visible').click();

    // Esperar a que se cree el ticket
    cy.wait('@createTicket').then(interception => {
      expect(interception.response?.statusCode).to.equal(201);
      expect(interception.response?.body).to.have.property('id');
      expect(interception.response?.body.title).to.equal(ticketTitle);

      // Guardar el ID y título del ticket en localStorage para los siguientes tests
      const ticketId = interception.response?.body.id;
      cy.window().then(win => {
        win.localStorage.setItem('e2e_ticket_id', String(ticketId));
        win.localStorage.setItem('e2e_ticket_title', ticketTitle);
      });
    });

    // Esperar a que se recargue la lista de tickets
    cy.wait('@getTickets').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 7: Verificar que el ticket aparece en la lista
    cy.url().should('match', new RegExp('/ticket(\\?.*)?$'));
    cy.contains(ticketTitle).should('be.visible');
  });
});
