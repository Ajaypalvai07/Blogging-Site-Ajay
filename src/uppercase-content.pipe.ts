import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseContent'
})
export class UppercaseContentPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.toUpperCase();
  }

}