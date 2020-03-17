import { Component, OnInit } from '@angular/core';
import { routeChangeAnimation } from './animations/route-change/route-change.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeChangeAnimation]
})
export class AppComponent implements OnInit {
  getRouteAnimationState(outlet: RouterOutlet) {
    console.log(outlet)
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }
  ngOnInit() {
    
  }
}
