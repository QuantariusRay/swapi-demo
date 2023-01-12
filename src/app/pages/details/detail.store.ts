import { Character } from '../../models/character.interface';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { SwapiService } from '../../services/swapi.service';
import { concatMap, Observable } from 'rxjs';

export interface DetailStoreState {
  character: Character | null;
}

@Injectable()
export class DetailStore extends ComponentStore<DetailStoreState> {

  public character$ = this.select(state => state.character);

  public getCharacterData = this.effect((id$: Observable<number>) =>
    id$.pipe(
      concatMap(id => this.service.getCharacterById(id)),
      tapResponse(
        character => this.setCharacterData(character),
        err => console.error(err)
      )
    )
  );

  private setCharacterData = this.updater((state: DetailStoreState, characterData: Character) => ({
    ...state,
    character: characterData
  }));

  constructor(private readonly service: SwapiService) {
    super({
      character: null
    });
  }
}
