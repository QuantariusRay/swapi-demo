import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height',
  standalone: true
})
export class HeightPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return ''
    }

    let inches: number = Number((parseInt(value) * .393700787).toFixed(0));
    const ft = Math.floor(inches / 12);
    inches %= 12;

    return `${value}cm (${ft}ft ${inches}in)`;
  }
}
