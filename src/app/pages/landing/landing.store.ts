import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { SwapiService } from '../../services/swapi.service';
import { concatMap, Observable } from 'rxjs';
import { Character } from '../../models/character.interface';

export interface LandingState {
  characterList: Character[] | null;
}

@Injectable()
export class LandingStore extends ComponentStore<LandingState> {

  public characterList$ = this.select(state => state.characterList);

  public getAllCharacters = this.effect(origin$ => {
    this.setState(state => ({ ...state, characterList: null }));

    return origin$.pipe(
      concatMap(_ => this.service.getCharacters()),
      tapResponse(
        characters => this.setCharacters(characters),
        err => console.error(err))
    )
  });

  public searchCharacters = this.effect((query$: Observable<string | null>) =>
    query$.pipe(
      concatMap(query => this.service.searchCharacters(query)),
      tapResponse(
        characters => this.setCharacters(characters),
        err => console.error(err))
      )
  );



  private setCharacters = this.updater((state: LandingState, characters: Character[]) => ({
    ...state,
    characterList: characters
  }));

  constructor(private readonly service: SwapiService) {
    super({
      characterList: null
    });
  }
}
