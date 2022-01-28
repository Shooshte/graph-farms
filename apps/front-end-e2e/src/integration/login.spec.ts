describe('user auth', () => {
  // TODO error message test
  // TODO loading message test

  it('happy path login flow', () => {
    cy.login({ username: 'admin', password: 'admin' });
    cy.url().should('include', '/shop');
  });

  it('correctly display login and user routes when not authenticated', () => {
    cy.get('nav').contains('about');
    cy.get('nav').contains('login');
    cy.get('nav').contains('register');
  });

  it('correctly display user routes', () => {
    cy.login({ username: 'test1', password: 'test1' });
    cy.get('nav').contains('about');
    cy.get('nav').contains('shop');
    cy.get('nav').contains('profile');
  });

  it('correctly display admin routes', () => {
    cy.login({ username: 'admin', password: 'admin' });
    cy.get('nav').contains('about');
    cy.get('nav').contains('shop');
    cy.get('nav').contains('profile');
    cy.get('nav').contains('admin');
  });
});
