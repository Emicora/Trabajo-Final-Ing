/**
 * E2E Test: Login via API and create a ticket
 * This test demonstrates login using the API and then testing ticket creation functionality
 */
describe('Ticket API E2E Test', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const apiBaseUrl = Cypress.env('apiUrl') ?? 'http://localhost:8080/api';

  let authToken: string;
  let createdTicketId: number;

  before(() => {
    // Login using API
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/authenticate`,
      body: {
        username: username,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id_token');
      authToken = response.body.id_token;
    });
  });

  it('should create a ticket via API after login', () => {
    // Create a ticket using the authenticated API
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/tickets`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        title: 'Test Ticket via API',
        description: 'This ticket was created via API after login',
        status: 'OPEN',
        type: 'BUG',
        priority: 'HIGH',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('Test Ticket via API');
      expect(response.body.description).to.eq('This ticket was created via API after login');
      createdTicketId = response.body.id;
    });
  });

  it('should retrieve the created ticket via API', () => {
    // Retrieve the ticket we just created
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/tickets/${createdTicketId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(createdTicketId);
      expect(response.body.title).to.eq('Test Ticket via API');
    });
  });

  it('should update the ticket via API', () => {
    // Update the ticket status
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}/tickets`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: createdTicketId,
        title: 'Test Ticket via API - Updated',
        description: 'This ticket was updated via API',
        status: 'IN_PROGRESS',
        type: 'BUG',
        priority: 'HIGH',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Test Ticket via API - Updated');
      expect(response.body.status).to.eq('IN_PROGRESS');
    });
  });

  after(() => {
    // Cleanup: Delete the created ticket
    if (createdTicketId) {
      cy.request({
        method: 'DELETE',
        url: `${apiBaseUrl}/tickets/${createdTicketId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    }
  });
});



