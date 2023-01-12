import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlanetFinderService {

  private readonly planetList = [
    {
      uid: '1',
      name: 'Tatooine',
      url: 'https://swapi.dev/api/planets/1/'
    },
    {
      uid: '2',
      name: 'Alderaan',
      url: 'https://swapi.dev/api/planets/2/'
    },
    {
      uid: '3',
      name: 'Yavin IV',
      url: 'https://swapi.dev/api/planets/3/'
    },
    {
      uid: '4',
      name: 'Hoth',
      url: 'https://swapi.dev/api/planets/4/'
    },
    {
      uid: '5',
      name: 'Dagobah',
      url: 'https://swapi.dev/api/planets/5/'
    },
    {
      uid: '6',
      name: 'Bespin',
      url: 'https://swapi.dev/api/planets/6/'
    },
    {
      uid: '7',
      name: 'Endor',
      url: 'https://swapi.dev/api/planets/7/'
    },
    {
      uid: '8',
      name: 'Naboo',
      url: 'https://swapi.dev/api/planets/8/'
    },
    {
      uid: '9',
      name: 'Coruscant',
      url: 'https://swapi.dev/api/planets/9/'
    },
    {
      uid: '10',
      name: 'Kamino',
      url: 'https://swapi.dev/api/planets/10/'
    },
    {
      uid: '11',
      name: 'Geonosis',
      url: 'https://swapi.dev/api/planets/11/'
    },
    {
      uid: '12',
      name: 'Utapau',
      url: 'https://swapi.dev/api/planets/12/'
    },
    {
      uid: '13',
      name: 'Mustafar',
      url: 'https://swapi.dev/api/planets/13/'
    },
    {
      uid: '14',
      name: 'Kashyyyk',
      url: 'https://swapi.dev/api/planets/14/'
    },
    {
      uid: '15',
      name: 'Polis Massa',
      url: 'https://swapi.dev/api/planets/15/'
    },
    {
      uid: '16',
      name: 'Mygeeto',
      url: 'https://swapi.dev/api/planets/16/'
    },
    {
      uid: '17',
      name: 'Felucia',
      url: 'https://swapi.dev/api/planets/17/'
    },
    {
      uid: '18',
      name: 'Cato Neimoidia',
      url: 'https://swapi.dev/api/planets/18/'
    },
    {
      uid: '19',
      name: 'Saleucami',
      url: 'https://swapi.dev/api/planets/19/'
    },
    {
      uid: '20',
      name: 'Stewjon',
      url: 'https://swapi.dev/api/planets/20/'
    },
    {
      uid: '21',
      name: 'Eriadu',
      url: 'https://swapi.dev/api/planets/21/'
    },
    {
      uid: '22',
      name: 'Corellia',
      url: 'https://swapi.dev/api/planets/22/'
    },
    {
      uid: '23',
      name: 'Rodia',
      url: 'https://swapi.dev/api/planets/23/'
    },
    {
      uid: '24',
      name: 'Nal Hutta',
      url: 'https://swapi.dev/api/planets/24/'
    },
    {
      uid: '25',
      name: 'Dantooine',
      url: 'https://swapi.dev/api/planets/25/'
    },
    {
      uid: '26',
      name: 'Bestine IV',
      url: 'https://swapi.dev/api/planets/26/'
    },
    {
      uid: '27',
      name: 'Ord Mantell',
      url: 'https://swapi.dev/api/planets/27/'
    },
    {
      uid: '28',
      name: 'Unknown',
      url: 'https://swapi.dev/api/planets/28/'
    },
    {
      uid: '29',
      name: 'Trandosha',
      url: 'https://swapi.dev/api/planets/29/'
    },
    {
      uid: '30',
      name: 'Socorro',
      url: 'https://swapi.dev/api/planets/30/'
    },
  ]

  findPlanetByUrl(url: string): string {
    const planet = this.planetList.find(planet => planet.url === url);

    if (planet) {
      return planet.name;
    }

    return '';
  }
}
