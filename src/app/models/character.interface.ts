export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface CharacterResponse {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}

export interface CharacterSearchResponse extends response {
  result: CharacterSearchResult[];
}

export interface CharacterSearchResult {
  description: string;
  properties: Character;
}

interface response {
  message: string;
}
