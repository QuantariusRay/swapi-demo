import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.interface';
import { TitleCasePipe } from '@angular/common';
import { HeightPipe } from '../../pipes/height.pipe';
import { WeightPipe } from '../../pipes/weight.pipe';

@Component({
  selector: 'character-profile',
  standalone: true,
  template: `
    <h2>{{ character.name }}</h2>

    <dl>
      <dt>Gender</dt>
      <dd>{{ character.gender | titlecase }}</dd>

      <dt>Birth Year</dt>
      <dd>{{ character.birth_year }}</dd>

      <dt>Height</dt>
      <dd>{{ character.height | height }}</dd>

      <dt>Weight</dt>
      <dd>{{ character.mass | weight }}</dd>

      <dt>Eye Color</dt>
      <dd>{{ character.eye_color | titlecase }}</dd>
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
