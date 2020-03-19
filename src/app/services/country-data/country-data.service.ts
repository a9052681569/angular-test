import { Injectable } from '@angular/core';
import { Country } from 'src/app/types/country/country';

@Injectable()
export class CountryDataService {
  private data: Country[] = [
    {name: 'satana', id: Math.random()},
    {name: 'canada', id: Math.random()},
    {name: 'russia', id: Math.random()},
    {name: 'usa', id: Math.random()}
  ];
  public getData(): Country[] {
    return this.data;
  }
  public addData(name: string): void {
    this.data.push(new Country(name, Math.random()));
  }
  public deleteData(id: number): void {
    this.data.forEach((item, index, arr) => {
      if (id === item.id) {
          arr.splice(index, 1);
      }
    });
  }
}
