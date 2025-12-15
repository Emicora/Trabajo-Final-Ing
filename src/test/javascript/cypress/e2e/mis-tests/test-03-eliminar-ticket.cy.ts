/**
 * Test E2E 3: Eliminar Ticket Creado
 * Este test elimina el ticket creado por el test 1 navegando por la UI
 */

import { entityDeleteButtonSelector, entityConfirmDeleteButtonSelector } from '../../support/entity';
import { usernameLoginSelector, passwordLoginSelector, submitLoginSelector } from '../../support/commands';

describe('Test 3: Eliminar Ticket Creado', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const ticketTitle = 'Ticket Test E2E - Modificado'; // Título después de la modificación
  const originalTicketTitle = 'Ticket Test E2E - Navegación';
  const ticketPageUrl = '/ticket';
  const loginPageUrl = '/login';

  beforeEach(() => {
    // Configurar intercepts antes de cualquier acción
    cy.intercept('GET', '/api/tickets+(?*|)').as('getTickets');
    cy.intercept('DELETE', '/api/tickets/*').as('deleteTicket');
    cy.intercept('POST', '/api/authenticate').as('authenticate');
  });

  it('debe hacer login y eliminar el ticket creado por el test 1 navegando por la interfaz', () => {
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

    // Paso 4: Buscar el ticket creado/modificado por los tests anteriores
    // Obtener el título del ticket del localStorage o usar el título por defecto
    cy.window().then(win => {
      const savedTicketTitle = win.localStorage.getItem('e2e_ticket_title') || ticketTitle;

      // Buscar el ticket en la lista
      cy.contains(savedTicketTitle).should('be.visible');

      // Paso 5: Encontrar la fila del ticket y hacer clic en eliminar
      // Buscar la fila que contiene el título del ticket
      cy.contains('tbody tr', savedTicketTitle).within(() => {
        cy.get(entityDeleteButtonSelector).first().click();
      });
    });

    // Verificar que se muestra el diálogo de confirmación de eliminación
    cy.getEntityDeleteDialogHeading('ticket').should('be.visible');

    // Paso 6: Confirmar la eliminación
    cy.get(entityConfirmDeleteButtonSelector).should('be.visible').click();

    // Esperar a que se elimine el ticket
    cy.wait('@deleteTicket').then(interception => {
      expect(interception.response?.statusCode).to.equal(204);
    });

    // Esperar a que se recargue la lista de tickets
    cy.wait('@getTickets').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 7: Verificar que el ticket ya no aparece en la lista
    cy.url().should('match', new RegExp('/ticket(\\?.*)?$'));
    cy.window().then(win => {
      const savedTicketTitle = win.localStorage.getItem('e2e_ticket_title') || ticketTitle;
      cy.contains(savedTicketTitle).should('not.exist');
    });

    // Limpiar el localStorage después de eliminar
    cy.window().then(win => {
      win.localStorage.removeItem('e2e_ticket_id');
      win.localStorage.removeItem('e2e_ticket_title');
    });
  });
});
