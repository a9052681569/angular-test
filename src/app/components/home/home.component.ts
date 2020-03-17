import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('homeText')
  homeParagraph: ElementRef

  public home: string = 'привет дом'
  constructor() { }

  change() {
    console.log(this.homeParagraph.nativeElement.textContent)
    this.home = 'пока дом'
  }
  ngOnInit(): void {
  }

}
