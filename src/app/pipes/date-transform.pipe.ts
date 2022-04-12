import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform',
})
export class DateTransformPipe implements PipeTransform {
  transform(value: string) {
    const date = new Date(value);
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString().slice(0, -3);
    return `${day}, ${time}`;
  }
}
