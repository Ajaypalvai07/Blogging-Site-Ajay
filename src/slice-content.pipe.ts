import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({ name: 'sliceContent' })
export class SliceContentPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (!value) return '';
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}
