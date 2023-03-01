import { CharacterProfileComponent } from './character-profile.component';

describe('Character Profile', () => {
  beforeEach(() => {
    cy.mount(CharacterProfileComponent, {
      imports: [CharacterProfileComponent],
      componentProperties: {
        character: {
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "hair_color": "blond",
          "skin_color": "fair",
          "eye_color": "blue",
          "birth_year": "19BBY",
          "gender": "male",
          "homeworld": "https://swapi.dev/api/planets/1/",
          "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
          ],
          "species": [],
          "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
          ],
          "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
          ],
          "created": "2014-12-09T13:50:51.644000Z",
          "edited": "2014-12-20T21:17:56.891000Z",
          "url": "https://swapi.dev/api/people/1/"
        }
      }
    });
  });

  it('should properly format all character data', () => {
    cy.get('[data-cy="character-name"]')
      .should('have.text', 'Luke Skywalker');

    cy.get('[data-cy="character-gender"]')
      .should('have.text', 'Male');

    cy.get('[data-cy="birth-year"]')
      .should('have.text', '19BBY');

    cy.get('[data-cy="character-height"]')
      .should('have.text', '172cm (5ft 8in)');

    cy.get('[data-cy="character-weight"]')
      .should('have.text', '77kg (169.8lbs)');

    cy.get('[data-cy="eye-color"]')
      .should('have.text', 'Blue');
  });
})
