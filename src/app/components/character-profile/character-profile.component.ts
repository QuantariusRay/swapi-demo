import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.interface';
import { TitleCasePipe } from '@angular/common';
import { HeightPipe } from '../../pipes/height.pipe';
import { WeightPipe } from '../../pipes/weight.pipe';

@Component({
  selector: 'character-profile',
  standalone: true,
  template: `
    <h2 data-cy="character-name">{{ character.name }}</h2>

    <dl>
      <dt>Gender</dt>
      <dd data-cy="character-gender">{{ character.gender | titlecase }}</dd>

      <dt>Birth Year</dt>
      <dd data-cy="birth-year">{{ character.birth_year }}</dd>

      <dt>Height</dt>
      <dd data-cy="character-height">{{ character.height | height }}</dd>

      <dt>Weight</dt>
      <dd data-cy="character-weight">{{ character.mass | weight }}</dd>

      <dt>Eye Color</dt>
      <dd data-cy="eye-color">{{ character.eye_color | titlecase }}</dd>
    </dl>
  `,
  imports: [
    TitleCasePipe,
    HeightPipe,
    WeightPipe,
  ],
  styles: [`
    dl {
      display: grid;
      grid-template-columns: max-content auto;
      padding: .5rem;
    }

    h2 {
      padding: 0 .5rem;
    }

    dt {
      grid-column-start: 1;
    }

    dd {
      grid-column-start: 2;
    }
  `],
})
export class CharacterProfileComponent {
  @Input() character!: Character;
}
