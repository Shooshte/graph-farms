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

  const ADMIN_LINKS = [
    {
      to: '/admin',
      text: 'admin',
    },
  ];

  const PRIVATE_LINKS = [
    {
      to: '/shop',
      text: 'shop',
    },
    { to: '/profile', text: 'profile' },
  ];

  const PUBLIC_LINKS = [
    {
      to: '/login',
      text: 'login',
    },
    { to: '/register', text: 'register' },
  ];

  const STATIC_LINKS = [
    {
      to: '/',
      text: 'about',
    },
  ];

  it('correctly display login and user route links when not authenticated', () => {
    cy.visit('/');

    STATIC_LINKS.forEach((link) => {
      cy.get('nav').contains(link.text);
    });

    PUBLIC_LINKS.forEach((link) => {
      cy.get('nav').contains(link.text);
    });
  });

  it('correctly display user routes', () => {
    cy.login({ username: 'test1', password: 'test1' });
    STATIC_LINKS.forEach((link) => {
      cy.get('nav').contains(link.text);
    });
    PRIVATE_LINKS.forEach((link) => {
      cy.get('nav').contains(link.text);
    });
  });

  it('correctly display admin routes', () => {
    cy.login({ username: 'admin', password: 'admin' });
    STATIC_LINKS.forEach((link) => {
      cy.get('nav').contains(link.text);
    });
    PRIVATE_LINKS.forEach((link) => {
      cy.get('nav').contains(link.text);
    });
    ADMIN_LINKS.forEach((link) => {
      cy.get('nav').contains(link.text);
    });
  });

  STATIC_LINKS.forEach(({ to }) => {
    const testDescription = `It should stay on the page when ${to} is first loaded.`;
    it(testDescription, () => {
      cy.visit(to);
      cy.url().should('include', to);
    });
  });

  PUBLIC_LINKS.forEach(({ to }) => {
    const testDescription = `It should stay on the page when ${to} is first loaded.`;
    it(testDescription, () => {
      cy.visit(to);
      cy.url().should('include', to);
    });
  });

  ADMIN_LINKS.forEach(({ to }) => {
    const testDescription = `It should redirect to the login page when ${to} is first loaded.`;
    it(testDescription, () => {
      cy.visit(to);
      cy.url().should('include', '/login');
    });
  });

  PRIVATE_LINKS.forEach(({ to }) => {
    const testDescription = `It should redirect to the login page when ${to} is first loaded.`;
    it(testDescription, () => {
      cy.visit(to);
      cy.url().should('include', '/login');
    });
  });

  STATIC_LINKS.forEach(({ to, text }) => {
    const testDescription = `It should redirect to ${to} when ${text} is clicked in the navigation bar.`;

    it(testDescription, () => {
      cy.visit('/register');
      cy.get('nav').contains(text).click();
      cy.url().should('include', to);
    });
  });

  PUBLIC_LINKS.forEach(({ to, text }) => {
    const testDescription = `It should redirect to ${to} when ${text} is clicked in the navigation bar.`;

    it(testDescription, () => {
      cy.visit('/');
      cy.get('nav').contains(text).click();
      cy.url().should('include', to);
    });
  });

  STATIC_LINKS.forEach(({ to, text }) => {
    const testDescription = `It should redirect to ${to} when ${text} is clicked in the navigation bar when logged in as a normal user.`;

    it(testDescription, () => {
      cy.login({ username: 'test1', password: 'test1' });
      cy.get('nav').contains(text).click();
      cy.url().should('include', to);
    });
  });

  PRIVATE_LINKS.forEach(({ to, text }) => {
    const testDescription = `It should redirect to ${to} when ${text} is clicked in the navigation bar when logged in as a normal user.`;

    it(testDescription, () => {
      cy.login({ username: 'test1', password: 'test1' });
      cy.get('nav').contains(text).click();
      cy.url().should('include', to);
    });
  });

  STATIC_LINKS.forEach(({ to, text }) => {
    const testDescription = `It should redirect to ${to} when ${text} is clicked in the navigation bar when logged in as an admin.`;

    it(testDescription, () => {
      cy.login({ username: 'admin', password: 'admin' });
      cy.get('nav').contains(text).click();
      cy.url().should('include', to);
    });
  });

  PRIVATE_LINKS.forEach(({ to, text }) => {
    const testDescription = `It should redirect to ${to} when ${text} is clicked in the navigation bar when logged in as an admin.`;

    it(testDescription, () => {
      cy.login({ username: 'admin', password: 'admin' });
      cy.get('nav').contains(text).click();
      cy.url().should('include', to);
    });
  });

  ADMIN_LINKS.forEach(({ to, text }) => {
    const testDescription = `It should redirect to ${to} when ${text} is clicked in the navigation bar when logged in as an admin.`;

    it(testDescription, () => {
      cy.login({ username: 'admin', password: 'admin' });
      window.history.pushState(null, null, '/');
      cy.get('nav').contains(text).click();
      cy.url().should('include', to);
    });
  });
});
