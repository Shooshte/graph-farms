// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(credentials: { username: string; password: string }): void;
    clickNavigation(arguments: {
      initialUrl?: string;
      text: string;
      to: string;
    });
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', ({ username, password }) => {
  cy.intercept('POST', '**/api/getProfile').as('postLogin');

  cy.visit('/login');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.wait('@postLogin');
});

Cypress.Commands.add('clickNavigation', ({ initialUrl = '/', text, to }) => {
  cy.intercept('POST', '**/api/getProfile').as('postLogin');
  window.history.pushState(null, null, initialUrl);
  cy.get('nav').contains(text).click();
  // wait a bit if the url will update correctly
  cy.url({ timeout: 10000 }).should('include', to);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
