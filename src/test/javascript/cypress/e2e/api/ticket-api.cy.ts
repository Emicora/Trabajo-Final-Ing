/**
 * Test E2E: Login por API y crear un ticket
 * Este test demuestra el login usando la API y luego prueba la funcionalidad de creación de tickets
 */
describe('Test E2E API de Tickets', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const apiBaseUrl = Cypress.env('apiUrl') ?? 'http://localhost:8080/api';

  let authToken: string;
  let createdTicketId: number;

  before(() => {
    // Login usando API
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/authenticate`,
      body: {
        username: username,
        password: password,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id_token');
      authToken = response.body.id_token;
    });
  });

  it('debe crear un ticket por API después del login', () => {
    // Crear un ticket usando la API autenticada
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/tickets`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        title: 'Ticket de Prueba por API',
        description: 'Este ticket fue creado por API después del login',
        status: 'OPEN',
        type: 'BUG',
        priority: 'HIGH',
      },
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('Ticket de Prueba por API');
      expect(response.body.description).to.eq('Este ticket fue creado por API después del login');
      createdTicketId = response.body.id;
    });
  });

  it('debe obtener el ticket creado por API', () => {
    // Obtener el ticket que acabamos de crear
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/tickets/${createdTicketId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(createdTicketId);
      expect(response.body.title).to.eq('Ticket de Prueba por API');
    });
  });

  it('debe actualizar el ticket por API', () => {
    // Actualizar el estado del ticket
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}/tickets/${createdTicketId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: createdTicketId,
        title: 'Ticket de Prueba por API - Actualizado',
        description: 'Este ticket fue actualizado por API',
        status: 'IN_PROGRESS',
        type: 'BUG',
        priority: 'HIGH',
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Ticket de Prueba por API - Actualizado');
      expect(response.body.status).to.eq('IN_PROGRESS');
    });
  });

  after(() => {
    // Limpieza: Eliminar el ticket creado
    if (createdTicketId) {
      cy.request({
        method: 'DELETE',
        url: `${apiBaseUrl}/tickets/${createdTicketId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then(response => {
        expect(response.status).to.eq(204);
      });
    }
  });
});
