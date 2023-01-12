import { Component, OnInit } from '@angular/core';
import { LandingStore } from './landing.store';
import { LetModule, PushModule } from '@ngrx/component';
import { NgForOf, NgIf } from '@angular/common';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { LandingSearchComponent } from './components/landing-search/landing-search.component';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  standalone: true,
  selector: 'landing-page',
  template: `
    <ng-container *ngIf="store.characterList$ | ngrxPush as characterList; else splash">
      <landing-search></landing-search>
        <ng-container *ngIf="characterList.length; else NoResults">
          <div class="character-container">
            <ng-container *ngFor="let character of characterList">
              <character-card [character]="character" (click)="viewDetails(character.url)"></character-card>
            </ng-container>
          </div>
      </ng-container>
    </ng-container>

    <ng-template #splash>
      <app-loading></app-loading>
    </ng-template>

    <ng-template #NoResults>
      <div>No Results Found</div>
    </ng-template>
  `,
  styles: [`
    .character-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      grid-auto-rows: 400px;
    }
  `],
  imports: [
    LetModule,
    NgForOf,
    CharacterCardComponent,
    LandingSearchComponent,
    NgIf,
    PushModule,
    LoadingComponent,
  ],
  providers: [LandingStore],
})
export class LandingPageComponent implements OnInit {

  constructor(
    public readonly store: LandingStore,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // initialize all first page characters
    this.store.getAllCharacters();
  }

  viewDetails(url: string) {
    const id = url.match(/(\d+)/);
    if (id) {
      this.router.navigate([id?.[0], 'details']);
    }
  }
}
