import { Pipe, PipeTransform } from '@angular/core';
import { PlanetFinderService } from '../services/planet-finder.service';

@Pipe({
  name: 'planetName',
  standalone: true
})
export class PlanetNamePipe implements PipeTransform {

  constructor(private readonly service: PlanetFinderService) {
  }

  transform(url: string): string {
    return this.service.findPlanetByUrl(url);
  }
}
