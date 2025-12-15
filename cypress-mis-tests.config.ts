import { defineConfig } from 'cypress';
import defaultConfig from './cypress.config';

export default defineConfig({
  ...defaultConfig,
  e2e: {
    ...defaultConfig.e2e,
    // Solo ejecutar los tests del usuario separados por operación
    specPattern: ['src/test/javascript/cypress/e2e/mis-tests/**/*.cy.ts'],
  },
});
