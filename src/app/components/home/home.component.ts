import { Component, OnInit, ViewChild, ElementRef, ViewRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('homeText', {read: ElementRef})
  homeParagraph: ElementRef;

  public home = 'привет дом';
  constructor() { }

  change() {
    console.log(this.homeParagraph);
    this.home = 'пока дом';
  }
  ngOnInit(): void {
  }

}
