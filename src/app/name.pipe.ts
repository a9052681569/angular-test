import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
  }

}
