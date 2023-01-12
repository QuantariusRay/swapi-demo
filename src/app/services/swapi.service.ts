import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Character,
  CharacterResponse,
  CharacterSearchResponse,
} from '../models/character.interface';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwapiService {

  constructor(private readonly http: HttpClient) {
  }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<CharacterResponse>('https://swapi.dev/api/people')
      .pipe(
        map((res: CharacterResponse) => res.results)
      );
  }

  public getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`https://swapi.dev/api/people/${id}/`);
  }

  public searchCharacters(query: string | null): Observable<Character[]> {
    return this.http.get<CharacterSearchResponse>(`https://www.swapi.tech/api/people/?name=${query}`)
      .pipe(
        map((res: CharacterSearchResponse) => res.result.map(chars => chars.properties))
      )
  }
}
