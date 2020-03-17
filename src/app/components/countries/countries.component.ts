import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country } from 'src/app/types/country/country';
import { CountryDataService } from 'src/app/services/country-data/country-data.service';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import { softAppear } from 'src/app/animations/soft-appear/soft-appear.animation';

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
      name: ''
    })
  }

  public addCountry(): void {
    this.dataService.addData(this.countryForm.value.name)
    this.countryForm.reset()
  }
  public deleteCountry(id: number): void {
    this.dataService.deleteData(id)
  }
  public animationLog(s: AnimationEvent) {
<<<<<<< HEAD
    console.log('анимируем')
=======
    if(s.phaseName === 'done') {
      console.log('конец анимации')
    }
    if(s.phaseName === 'start') {
      console.log('начало анимации')
    }
>>>>>>> 130e1123d6bbaad47a3b1ca1087abfde3f983e9a
  }
  ngOnInit(): void {
    this.countries = this.dataService.getData()
  }
  
}