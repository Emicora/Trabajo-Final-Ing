/**
 * Test E2E 1: Login y Crear Proyecto
 * Este test realiza login mediante la interfaz y crea un proyecto navegando por la UI
 */

import { entityCreateButtonSelector, entityCreateSaveButtonSelector } from '../../support/entity';
import { usernameLoginSelector, passwordLoginSelector, submitLoginSelector } from '../../support/commands';

describe('Test 1: Login y Crear Proyecto', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const projectName = 'Proyecto Test E2E - Navegación';
  const projectPageUrl = '/project';
  const loginPageUrl = '/login';

  beforeEach(() => {
    // Configurar intercepts antes de cualquier acción
    cy.intercept('GET', '/api/projects+(?*|)').as('getProjects');
    cy.intercept('POST', '/api/projects').as('createProject');
    cy.intercept('POST', '/api/authenticate').as('authenticate');
  });

  it('debe hacer login y crear un proyecto navegando por la interfaz', () => {
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

    // Paso 3: Navegar a la página de proyectos
    cy.visit(projectPageUrl);
    cy.url().should('include', '/project');

    // Esperar a que cargue la lista de proyectos
    cy.wait('@getProjects').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 4: Hacer clic en el botón de crear proyecto
    cy.get(entityCreateButtonSelector).should('be.visible').click();

    // Verificar que se muestra el formulario de creación
    cy.getEntityCreateUpdateHeading('Project').should('be.visible');
    cy.url().should('include', '/project/new');

    // Paso 5: Llenar el formulario con el nombre del proyecto
    cy.get('[data-cy="name"]').should('be.visible').clear().type(projectName);
    cy.get('[data-cy="name"]').should('have.value', projectName);

    // Paso 6: Guardar el proyecto
    cy.get(entityCreateSaveButtonSelector).should('be.visible').click();

    // Esperar a que se cree el proyecto
    cy.wait('@createProject').then(interception => {
      expect(interception.response?.statusCode).to.equal(201);
      expect(interception.response?.body).to.have.property('id');
      expect(interception.response?.body.name).to.equal(projectName);

      // Guardar el ID y nombre del proyecto en localStorage para los siguientes tests
      const projectId = interception.response?.body.id;
      cy.window().then(win => {
        win.localStorage.setItem('e2e_project_id', String(projectId));
        win.localStorage.setItem('e2e_project_name', projectName);
      });
    });

    // Esperar a que se recargue la lista de proyectos
    cy.wait('@getProjects').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 7: Verificar que el proyecto aparece en la lista
    cy.url().should('match', new RegExp('/project(\\?.*)?$'));
    cy.contains(projectName).should('be.visible');
  });
});
