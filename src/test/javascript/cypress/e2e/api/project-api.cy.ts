/**
 * E2E Test: Login via API and manage projects
 * This test demonstrates login using the API and then testing project CRUD operations
 */
describe('Project API E2E Test', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const apiBaseUrl = Cypress.env('apiUrl') ?? 'http://localhost:8080/api';

  let authToken: string;
  let createdProjectId: number;

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

  it('should create a project via API after login', () => {
    // Create a project using the authenticated API
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/projects`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        name: 'Test Project via API',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq('Test Project via API');
      createdProjectId = response.body.id;
    });
  });

  it('should list all projects via API', () => {
    // List all projects
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/projects`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      // Verify our created project is in the list
      const project = response.body.find((p: any) => p.id === createdProjectId);
      expect(project).to.exist;
      expect(project.name).to.eq('Test Project via API');
    });
  });

  it('should update the project via API', () => {
    // Update the project name
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}/projects`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: createdProjectId,
        name: 'Updated Project via API',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Updated Project via API');
    });
  });

  after(() => {
    // Cleanup: Delete the created project
    if (createdProjectId) {
      cy.request({
        method: 'DELETE',
        url: `${apiBaseUrl}/projects/${createdProjectId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    }
  });
});



