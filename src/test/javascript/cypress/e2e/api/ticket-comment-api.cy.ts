/**
 * Test E2E: Login por API y crear ticket con comentarios
 * Este test demuestra el login usando la API y luego prueba la funcionalidad de tickets y comentarios
 */
describe('Test E2E API de Tickets y Comentarios', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const apiBaseUrl = Cypress.env('apiUrl') ?? 'http://localhost:8080/api';

  let authToken: string;
  let createdTicketId: number;
  let createdCommentId: number;

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

  it('debe crear un ticket y agregar comentarios por API después del login', () => {
    // Paso 1: Crear un ticket
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/tickets`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        title: 'Ticket con Comentarios',
        description: 'Este ticket tendrá comentarios agregados por API',
        status: 'OPEN',
        type: 'FEATURE',
        priority: 'NORMAL',
      },
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      createdTicketId = response.body.id;
    });

    // Paso 2: Agregar un comentario al ticket
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/comments`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        text: 'Primer comentario agregado por API',
        date: new Date().toISOString(),
      },
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.text).to.eq('Primer comentario agregado por API');
      createdCommentId = response.body.id;
    });
  });

  it('debe obtener el ticket con comentarios por API', () => {
    // Obtener el ticket
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/tickets/${createdTicketId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(createdTicketId);
      expect(response.body.title).to.eq('Ticket con Comentarios');
    });

    // Obtener el comentario
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/comments/${createdCommentId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(createdCommentId);
      expect(response.body.text).to.eq('Primer comentario agregado por API');
    });
  });

  it('debe actualizar el comentario por API', () => {
    // Actualizar el comentario
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}/comments/${createdCommentId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: createdCommentId,
        text: 'Comentario actualizado por API',
        date: new Date().toISOString(),
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.text).to.eq('Comentario actualizado por API');
    });
  });

  after(() => {
    // Limpieza: Eliminar primero el comentario, luego el ticket
    if (createdCommentId) {
      cy.request({
        method: 'DELETE',
        url: `${apiBaseUrl}/comments/${createdCommentId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        failOnStatusCode: false,
      });
    }
    if (createdTicketId) {
      cy.request({
        method: 'DELETE',
        url: `${apiBaseUrl}/tickets/${createdTicketId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        failOnStatusCode: false,
      });
    }
  });
});
