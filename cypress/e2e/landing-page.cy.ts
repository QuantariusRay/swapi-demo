describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      `https://swapi.dev/api/people`,
      { fixture: 'people.json' }
    ).as('people');

    cy.visit('/');
  })

  it('should display a list of characters', () => {
    cy.get('character-card')
      .should('have.length', 10);
  });

  it('should display the character name on the display of the card', () => {
    cy.get('character-card')
      .first()
      .find('h4')
      .should('have.text', 'Luke Skywalker');
  });

  it('should allow user to search for a particular character', () => {
    cy.searchFlow();

    cy.get('character-card')
      .should('have.length', 1);
  });

  it('should reset return values and the search bar when reset is clicked', () => {
    cy.searchFlow();

    cy.get('character-card')
      .should('have.length', 1);

    cy.get('button')
      .contains('Reset')
      .click();

    cy.get('character-card')
      .should('have.length', 10);

    cy.get('input')
      .should('have.text', '');
  });

  it('should navigate to the details page upon click of a card', () => {
    cy.intercept(
      'GET',
      `https://swapi.dev/api/people/1/`,
      { fixture: 'luke-select.json' }
    ).as('luke');

    cy.get('character-card')
      .first()
      .click();

    cy.url().should('include', '/1/details');
    cy.get('h1')
      .should('have.text', 'Luke Skywalker');
  });
});
