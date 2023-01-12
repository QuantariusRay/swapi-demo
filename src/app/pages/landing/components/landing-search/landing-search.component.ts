import { Component } from '@angular/core';
import { LandingStore } from '../../landing.store';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'landing-search',
  template: `
    <label for="sw-search">Search Star Wars Database</label>
    <div [formGroup]="searchForm" class="search-group">
      <input formControlName="searchQuery" id="sw-search" type="text"/>
      <button (click)="searchForm.reset(); store.getAllCharacters()">Reset</button>
      <button (click)="store.searchCharacters(searchForm.controls.searchQuery.value)">Search</button>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
  ],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        margin-bottom: .5rem;
      }

      .search-group {
        display: flex;
      }

      button {
        background-color: transparent;
        color: white;
        border: 1px solid white;
        width: 5rem;
        text-transform: uppercase;
        margin: 0 0.5rem;
      }

      button:hover {
        background-color: white;
        color: black;
        border-color: black;
      }

      input {
        max-width: 20rem;
        height: 1.5rem;
        font-size: 2rem;
      }
    `,
  ],
})
export class LandingSearchComponent {

  searchForm = new FormGroup({
    searchQuery: new FormControl<string>('')
  });

  constructor(public readonly store: LandingStore) {}

}
