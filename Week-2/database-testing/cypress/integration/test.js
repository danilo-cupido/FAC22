// Challenge 1: write some tests
// Now you can finally write some tests without worrying about the DB.

// Add a test verifying the / route displays a list of users
// Add a test verifying you can create a user from the /create-user route
// Add a test verifying you can delete a user from the / route

beforeEach(() => {
  cy.task('resetDb');
});

it('verifies the /route displays a list of users', () => {
  cy.visit('/');
  cy.get('li');
  cy.should('contain', 'Sery1976')
    .and('contain', 'Notne1991')
    .and('contain', 'Moull1990')
    .and('contain', 'Spont1935')
    .and('contain', 'Precand');
});

it('verifies you can create a user from the /create-user route', () => {
  cy.visit('/users/create');
  cy.get("input[name='username']").type('Danilo');
  cy.get("input[name='age']").type('40');
  cy.get("input[name='location']").type('London');
  cy.get("button[type='submit']").click();
  cy.get('li');
  cy.should('contain', 'Danilo');
});

it('you can delete a user from the / route', () => {
  cy.visit('/');
  cy.get("button[value='1']").click();
  cy.should('not.exist', 'Sery1976');
});
