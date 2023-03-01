import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSrc',
  standalone: true
})
export class ImgSrcPipe implements PipeTransform {

  transform(characterName: string | null): string {

    if (!characterName) {
      return '/assets/images/default.png';
    }

    return `/assets/images/${characterName}.png`;
  }
}
