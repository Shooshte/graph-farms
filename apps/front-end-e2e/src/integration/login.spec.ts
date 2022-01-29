describe('user auth', () => {
  it('displays the incorrect credentials error message', () => {
    cy.login({ username: 'user-does-not-exist', password: 'huehue' });
    cy.contains('There was a problem: Incorrect credentials!');
  });

  it('displays the Loading text on the submit button and disables the button when POST-ing request', () => {
    cy.intercept('POST', '**/api/getProfile', (req) => {
      req.continue((res) => {
        // throttle response for 1000 to see the loading message on the button
        res.setDelay(1000);
      });
    }).as('postLoginIntercept');
    cy.visit('/login');
    cy.get('input[name="username"]').type('test1');
    cy.get('input[name="password"]').type('test1');
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').contains('Loading...');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('redirects to /admin after admin login', () => {
    cy.login({ username: 'admin', password: 'admin' });
    cy.url().should('include', '/admin');
  });

  it('redirects to /shop after normal user login', () => {
    cy.login({ username: 'test1', password: 'test1' });
    cy.url().should('include', '/shop');
  });

  it('correctly display login and user routes when not authenticated', () => {
    cy.visit('/');
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
