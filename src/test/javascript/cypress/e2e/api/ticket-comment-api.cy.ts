/**
 * E2E Test: Login via API and create ticket with comments
 * This test demonstrates login using the API and then testing ticket and comment functionality
 */
describe('Ticket and Comment API E2E Test', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const apiBaseUrl = Cypress.env('apiUrl') ?? 'http://localhost:8080/api';

  let authToken: string;
  let createdTicketId: number;
  let createdCommentId: number;

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

  it('should create a ticket and add comments via API after login', () => {
    // Step 1: Create a ticket
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/tickets`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        title: 'Ticket with Comments',
        description: 'This ticket will have comments added via API',
        status: 'OPEN',
        type: 'FEATURE',
        priority: 'NORMAL',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      createdTicketId = response.body.id;
    });

    // Step 2: Add a comment to the ticket
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/comments`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        text: 'First comment added via API',
        date: new Date().toISOString(),
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.text).to.eq('First comment added via API');
      createdCommentId = response.body.id;
    });
  });

  it('should retrieve ticket with comments via API', () => {
    // Retrieve the ticket
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/tickets/${createdTicketId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(createdTicketId);
      expect(response.body.title).to.eq('Ticket with Comments');
    });

    // Retrieve the comment
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/comments/${createdCommentId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(createdCommentId);
      expect(response.body.text).to.eq('First comment added via API');
    });
  });

  it('should update comment via API', () => {
    // Update the comment
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}/comments`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: createdCommentId,
        text: 'Updated comment via API',
        date: new Date().toISOString(),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.text).to.eq('Updated comment via API');
    });
  });

  after(() => {
    // Cleanup: Delete comment first, then ticket
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



