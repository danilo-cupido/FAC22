// it('can run a test', () => {
//   assert.equal(1, 1);
// });

// it('can navigate pages', () => {
//   cy.visit('https://example.cypress.io/');
// });

// it('can navigate pages', () => {
//   cy.visit('https://example.cypress.io/');
//   cy.contains('zzzzzz');
// });

// it('can navigate pages', () => {
//   cy.visit('https://example.cypress.io/');
//   cy.contains('within').click();
// });

// it('can navigate pages', () => {
//   cy.visit('https://example.cypress.io/');
//   cy.contains('within').click();
//   cy.url().should('include', '/commands/querying');
// });

// / page with a title of “Welcome to my site”

describe('homepage', () => {
  it('has correct title', () => {
    // we set baseURL to http://localhost:4444 in cypress.json
    // so we don't have to write it every time
    cy.visit('/');
    cy.get('h1').contains('Welcome to my site');
  });

  // / page has working links to /about and /sign-up
  // /about page with a title of “About this site”

  it('has link to about page', () => {
    cy.visit('/');
    cy.get('nav').find('a').contains('About').click();
    cy.url().should('include', '/about');
    cy.get('h1').contains('About this site');
  });

  it('has link to sign-up page', () => {
    cy.visit('/');
    cy.get('nav').find('a').contains('Sign up').click();
    cy.url().should('include', '/sign-up');
    cy.get('h1').contains('Sign up');
  });
});

// /sign-up page with a form containing email/password inputs
// /sign-up page redirects to /welcome after form submission
// (don’t worry about actually using the submitted data)

describe('sign up page', () => {
  it('has a working form', () => {
    cy.visit('/sign-up');
    cy.get('form').find("input[name='email']").type('oli@test.com');
    cy.get('form').find("input[name='password']").type('hunter2');
    cy.get('form').find('button').click();
    cy.url().should('include', '/welcome');
  });

  // bonus test for validation
  // since we're using <input type="email">
  // the browser should check the user actually typed one
  it('rejects invalid submissions', () => {
    cy.visit('/sign-up');
    cy.get('form').find("input[name='email']").type('not an email');
    cy.get('form').find('button').click();

    // we should have one invalid input—the email field
    // (this is a CSS selector using the :invalid pseudoclass)
    cy.get('input:invalid').should('have.length', 1);

    // we should not have redirected
    cy.url().should('include', '/sign-up');
  });
});

// /welcome page with a title of “Thanks for joining”

describe('homepage', () => {
  it('has correct title', () => {
    cy.visit('/welcome');
    cy.get('h1').contains('Thanks for joining');
  });
});
