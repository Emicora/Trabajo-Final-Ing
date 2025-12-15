/**
 * Test E2E 2: Modificar Proyecto Creado
 * Este test modifica el proyecto creado por el test 1 navegando por la UI
 */

import { entityEditButtonSelector, entityCreateSaveButtonSelector } from '../../support/entity';
import { usernameLoginSelector, passwordLoginSelector, submitLoginSelector } from '../../support/commands';

describe('Test 2: Modificar Proyecto Creado', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const originalProjectName = 'Proyecto Test E2E - Navegación';
  const modifiedProjectName = 'Proyecto Test E2E - Modificado';
  const projectPageUrl = '/project';
  const loginPageUrl = '/login';

  beforeEach(() => {
    // Configurar intercepts antes de cualquier acción
    cy.intercept('GET', '/api/projects+(?*|)').as('getProjects');
    cy.intercept('PUT', '/api/projects/*').as('updateProject');
    cy.intercept('POST', '/api/authenticate').as('authenticate');
  });

  it('debe hacer login y modificar el proyecto creado por el test 1 navegando por la interfaz', () => {
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

    // Paso 3: Navegar a la página de proyectos
    cy.visit(projectPageUrl);
    cy.url().should('include', '/project');

    // Esperar a que cargue la lista de proyectos
    cy.wait('@getProjects').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 4: Buscar el proyecto creado por el test 1
    // Obtener el nombre del proyecto del localStorage o usar el nombre por defecto
    cy.window().then(win => {
      const savedProjectName = win.localStorage.getItem('e2e_project_name') || originalProjectName;

      // Buscar el proyecto en la lista por nombre
      cy.contains(savedProjectName).should('be.visible');

      // Paso 5: Encontrar la fila del proyecto y hacer clic en editar
      // Buscar la fila que contiene el nombre del proyecto
      cy.contains('tbody tr', savedProjectName).within(() => {
        cy.get(entityEditButtonSelector).first().click();
      });
    });

    // Verificar que se muestra el formulario de edición
    cy.getEntityCreateUpdateHeading('Project').should('be.visible');

    // Paso 6: Modificar el nombre del proyecto
    cy.get('[data-cy="name"]').should('be.visible').clear().type(modifiedProjectName);
    cy.get('[data-cy="name"]').should('have.value', modifiedProjectName);

    // Paso 7: Guardar los cambios
    cy.get(entityCreateSaveButtonSelector).should('be.visible').click();

    // Esperar a que se actualice el proyecto
    cy.wait('@updateProject').then(interception => {
      expect(interception.response?.statusCode).to.equal(200);
      expect(interception.response?.body).to.have.property('id');
      expect(interception.response?.body.name).to.equal(modifiedProjectName);

      // Actualizar el nombre en localStorage para el siguiente test
      cy.window().then(win => {
        win.localStorage.setItem('e2e_project_name', modifiedProjectName);
      });
    });

    // Esperar a que se recargue la lista de proyectos
    cy.wait('@getProjects').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 8: Verificar que el proyecto modificado aparece en la lista
    cy.url().should('match', new RegExp('/project(\\?.*)?$'));
    cy.contains(modifiedProjectName).should('be.visible');

    // Verificar que el nombre original ya no aparece
    cy.contains(originalProjectName).should('not.exist');
  });
});
