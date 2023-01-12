import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
  standalone: true
})
export class WeightPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return ''
    }

    const pounds = parseInt(value) * 2.20462;

    return `${value}kg (${pounds.toFixed(1)}lbs)`;
  }
}
