import { CardComponent } from './card.component';

describe('Card Component Tests', () => {

  beforeEach(() => {
    cy.mount(CardComponent, {
      imports: [CardComponent]
    });
  });

  it('should display the front', () => {
    cy.get('.card .front')
      .should('be.visible')
      .should('have.css', 'background-color')
      .and('be.colored', '#bbbbbb');
  });

  it('should display the back color', () => {
    cy.get('.card .back')
      .should('be.visible')
      .should('have.css', 'background-color')
      .and('be.colored', 'dodgerblue');
  });

});
