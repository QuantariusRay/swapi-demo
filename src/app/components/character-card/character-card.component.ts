import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Character } from '../../models/character.interface';
import { CharacterProfileComponent } from '../character-profile/character-profile.component';
import { ImgSrcPipe } from '../../pipes/img-src.pipe';

@Component({
  standalone: true,
  selector: 'character-card',
  imports: [CardComponent, CharacterProfileComponent, ImgSrcPipe],
  template: `<card>
    <div front class="img-container">
      <img [src]="character.name | imgSrc" [alt]="character.name" style="width:100%; height: 300px;">
      <div class="container">
        <h4><b>{{ character.name }}</b></h4>
      </div>
    </div>
    <div back>
      <character-profile [character]="character"></character-profile>
    </div>
  </card>`,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .img-container {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
