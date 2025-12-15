/**
 * Test E2E 3: Eliminar Proyecto Creado
 * Este test elimina el proyecto creado por el test 1 navegando por la UI
 */

import { entityDeleteButtonSelector, entityConfirmDeleteButtonSelector } from '../../support/entity';
import { usernameLoginSelector, passwordLoginSelector, submitLoginSelector } from '../../support/commands';

describe('Test 3: Eliminar Proyecto Creado', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const projectName = 'Proyecto Test E2E - Modificado'; // Nombre después de la modificación
  const originalProjectName = 'Proyecto Test E2E - Navegación';
  const projectPageUrl = '/project';
  const loginPageUrl = '/login';

  beforeEach(() => {
    // Configurar intercepts antes de cualquier acción
    cy.intercept('GET', '/api/projects+(?*|)').as('getProjects');
    cy.intercept('DELETE', '/api/projects/*').as('deleteProject');
    cy.intercept('POST', '/api/authenticate').as('authenticate');
  });

  it('debe hacer login y eliminar el proyecto creado por el test 1 navegando por la interfaz', () => {
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

    // Paso 4: Buscar el proyecto creado/modificado por los tests anteriores
    // Obtener el nombre del proyecto del localStorage o usar el nombre por defecto
    cy.window().then(win => {
      const savedProjectName = win.localStorage.getItem('e2e_project_name') || projectName;

      // Buscar el proyecto en la lista
      cy.contains(savedProjectName).should('be.visible');

      // Paso 5: Encontrar la fila del proyecto y hacer clic en eliminar
      // Buscar la fila que contiene el nombre del proyecto
      cy.contains('tbody tr', savedProjectName).within(() => {
        cy.get(entityDeleteButtonSelector).first().click();
      });
    });

    // Verificar que se muestra el diálogo de confirmación de eliminación
    cy.getEntityDeleteDialogHeading('project').should('be.visible');

    // Paso 6: Confirmar la eliminación
    cy.get(entityConfirmDeleteButtonSelector).should('be.visible').click();

    // Esperar a que se elimine el proyecto
    cy.wait('@deleteProject').then(interception => {
      expect(interception.response?.statusCode).to.equal(204);
    });

    // Esperar a que se recargue la lista de proyectos
    cy.wait('@getProjects').then(({ response }) => {
      expect(response?.statusCode).to.equal(200);
    });

    // Paso 7: Verificar que el proyecto ya no aparece en la lista
    cy.url().should('match', new RegExp('/project(\\?.*)?$'));
    cy.window().then(win => {
      const savedProjectName = win.localStorage.getItem('e2e_project_name') || projectName;
      cy.contains(savedProjectName).should('not.exist');
    });

    // Limpiar el localStorage después de eliminar
    cy.window().then(win => {
      win.localStorage.removeItem('e2e_project_id');
      win.localStorage.removeItem('e2e_project_name');
    });
  });
});
