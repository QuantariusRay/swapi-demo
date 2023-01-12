import { LoadingComponent } from './loading.component';

describe('loading splash', () => {
  beforeEach(() => {
    cy.mount(LoadingComponent, {
      imports: [LoadingComponent]
    });
  });

  it('should load', () => {
    cy.get('h2')
      .should('have.text', 'Awaken The Demo');
  });
});
