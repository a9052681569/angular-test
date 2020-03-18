import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Country } from 'src/app/types/country/country';
import { CountryDataService } from 'src/app/services/country-data/country-data.service';
import { softAppear } from 'src/app/animations/soft-appear/soft-appear.animation';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountryDataService, FormBuilder],
  animations: [softAppear]
})
export class CountriesComponent implements OnInit {
  public countryForm: FormGroup
  public countries: Country[]

  constructor(private dataService: CountryDataService, private formBuilder: FormBuilder) {
    this.countryForm = formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(/^[а-яё\s\-]+$/i)]]
    })
  }

  private addCountry(): void {
    this.dataService.addData(this.countryForm.get('name').value)
  }
  public deleteCountry(id: number): void {
    this.dataService.deleteData(id)
  }
  public animationLog(s: AnimationEvent): void {
    console.log('анимируем')
  }
  public submit() {
    if(this.countryForm.valid) {
      this.addCountry()
      this.countryForm.reset()
    } else {
      this._name.markAsTouched()
    }
  }
  ngOnInit(): void {
    this.countries = this.dataService.getData()
  }
  

  get _name(): AbstractControl {
    return this.countryForm.get('name')
  }
  
}
