/**
 * Test E2E 2: Modificar Ticket Creado
 * Este test modifica el ticket creado por el test 1 navegando por la UI
 */

import { entityEditButtonSelector, entityCreateSaveButtonSelector } from '../../support/entity';
import { usernameLoginSelector, passwordLoginSelector, submitLoginSelector } from '../../support/commands';

describe('Test 2: Modificar Ticket Creado', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const originalTicketTitle = 'Ticket Test E2E - Navegación';
  const modifiedTicketTitle = 'Ticket Test E2E - Modificado';
  const modifiedTicketDescription = 'Descripción modificada del ticket';
  const modifiedTicketStatus = 'IN_PROGRESS';
  const ticketPageUrl = '/ticket';
  const loginPageUrl = '/login';

  beforeEach(() => {
    // Configurar intercepts antes de cualquier acción
    cy.intercept('GET', '/api/tickets+(?*|)').as('getTickets');
    cy.intercept('PUT', '/api/tickets/*').as('updateTicket');
    cy.intercept('POST', '/api/authenticate').as('authenticate');
  });

  it('debe hacer login y modificar el ticket creado por el test 1 navegando por la interfaz', () => {
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

    // Verificar que el login fue exitoso
    cy.url().should('not.include', '/login');

    // Paso 3: Navegar a la página de tickets
    cy.visit(ticketPageUrl);
    cy.url().should('include', '/ticket');

    // Esperar a que cargue la lista de tickets
    cy.wait('@getTickets').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 4: Buscar el ticket creado por el test 1
    // Obtener el título del ticket del localStorage o usar el título por defecto
    cy.window().then(win => {
      const savedTicketTitle = win.localStorage.getItem('e2e_ticket_title') || originalTicketTitle;

      // Buscar el ticket en la lista por título
      cy.contains(savedTicketTitle).should('be.visible');

      // Paso 5: Encontrar la fila del ticket y hacer clic en editar
      // Buscar la fila que contiene el título del ticket
      cy.contains('tbody tr', savedTicketTitle).within(() => {
        cy.get(entityEditButtonSelector).first().click();
      });
    });

    // Verificar que se muestra el formulario de edición
    cy.getEntityCreateUpdateHeading('Ticket').should('be.visible');

    // Paso 6: Modificar los campos del ticket
    cy.get('[data-cy="title"]').should('be.visible').clear().type(modifiedTicketTitle);
    cy.get('[data-cy="title"]').should('have.value', modifiedTicketTitle);

    cy.get('[data-cy="description"]').should('be.visible').clear().type(modifiedTicketDescription);
    cy.get('[data-cy="description"]').should('have.value', modifiedTicketDescription);

    cy.get('[data-cy="status"]').should('be.visible').select(modifiedTicketStatus);

    // Paso 7: Guardar los cambios
    cy.get(entityCreateSaveButtonSelector).should('be.visible').click();

    // Esperar a que se actualice el ticket
    cy.wait('@updateTicket').then(interception => {
      expect(interception.response?.statusCode).to.equal(200);
      expect(interception.response?.body).to.have.property('id');
      expect(interception.response?.body.title).to.equal(modifiedTicketTitle);
      expect(interception.response?.body.status).to.equal(modifiedTicketStatus);

      // Actualizar el título en localStorage para el siguiente test
      cy.window().then(win => {
        win.localStorage.setItem('e2e_ticket_title', modifiedTicketTitle);
      });
    });

    // Esperar a que se recargue la lista de tickets
    cy.wait('@getTickets').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 8: Verificar que el ticket modificado aparece en la lista
    cy.url().should('match', new RegExp('/ticket(\\?.*)?$'));
    cy.contains(modifiedTicketTitle).should('be.visible');

    // Verificar que el título original ya no aparece
    cy.contains(originalTicketTitle).should('not.exist');
  });
});
