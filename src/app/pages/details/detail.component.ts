import { Component, OnInit } from '@angular/core';
import { DetailStore } from './detail.store';
import { ActivatedRoute } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { NgIf, TitleCasePipe } from '@angular/common';
import { ImgSrcPipe } from '../../pipes/img-src.pipe';
import { PlanetNamePipe } from '../../pipes/planet-name.pipe';
import { HeightPipe } from '../../pipes/height.pipe';
import { WeightPipe } from '../../pipes/weight.pipe';

@Component({
  standalone: true,
  template: `
    <ng-container *ngIf="store.character$ | ngrxPush as character">
      <div>
        <img [src]="character.name | imgSrc" [alt]="character.name"/>
        <h1>{{ character.name | titlecase}}</h1>
      </div>

      <h2>Biographical Information</h2>
      <dl>
        <dt>Homeworld</dt>
        <dd>{{ character.homeworld | planetName }}</dd>

        <dt>Birth Year</dt>
        <dd>{{ character.birth_year }}</dd>
      </dl>

      <h2>Physical description</h2>
      <dl>
        <dt>Gender</dt>
        <dd>{{ character.gender | titlecase }}</dd>

        <dt>Height</dt>
        <dd>{{ character.height | height  }}</dd>

        <dt>Weight</dt>
        <dd>{{ character.mass | weight }}</dd>

        <dt>Hair Color</dt>
        <dd>{{ character.hair_color | titlecase }}</dd>

        <dt>Eye Color</dt>
        <dd>{{ character.eye_color | titlecase }}</dd>

        <dt>Skin Color</dt>
        <dd>{{ character.eye_color | titlecase }}</dd>
      </dl>
    </ng-container>
  `,
  styles: [`
    dl {
      display: grid;
      grid-template-columns: max-content auto;
      padding: .5rem;
    }

    dt {
      grid-column-start: 1;
    }

    dd {
      grid-column-start: 2;
    }
  `],
  imports: [
    PushModule,
    NgIf,
    ImgSrcPipe,
    TitleCasePipe,
    PlanetNamePipe,
    HeightPipe,
    WeightPipe,
  ],
  providers: [DetailStore],
})
export class DetailComponent implements OnInit {

  constructor(public readonly store: DetailStore, private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.getCharacterData(this.route.snapshot.params['id']);
  }
}
