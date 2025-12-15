/**
 * Test E2E: Login por API y gestionar proyectos
 * Este test demuestra el login usando la API y luego prueba las operaciones CRUD de proyectos
 */
describe('Test E2E API de Proyectos', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const apiBaseUrl = Cypress.env('apiUrl') ?? 'http://localhost:8080/api';

  let authToken: string;
  let createdProjectId: number;

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

  it('debe crear un proyecto por API después del login', () => {
    // Crear un proyecto usando la API autenticada
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/projects`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        name: 'Proyecto de Prueba por API',
      },
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq('Proyecto de Prueba por API');
      createdProjectId = response.body.id;
    });
  });

  it('debe listar todos los proyectos por API', () => {
    // Listar todos los proyectos
    cy.request({
      method: 'GET',
      url: `${apiBaseUrl}/projects`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      // Verificar que nuestro proyecto creado está en la lista
      const project = response.body.find((p: any) => p.id === createdProjectId);
      expect(project).to.exist;
      expect(project.name).to.eq('Proyecto de Prueba por API');
    });
  });

  it('debe actualizar el proyecto por API', () => {
    // Actualizar el nombre del proyecto
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}/projects/${createdProjectId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: createdProjectId,
        name: 'Proyecto Actualizado por API',
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Proyecto Actualizado por API');
    });
  });

  after(() => {
    // Limpieza: Eliminar el proyecto creado
    if (createdProjectId) {
      cy.request({
        method: 'DELETE',
        url: `${apiBaseUrl}/projects/${createdProjectId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then(response => {
        expect(response.status).to.eq(204);
      });
    }
  });
});
