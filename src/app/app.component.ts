import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const getX = (touch$: Observable<TouchEvent>): Observable<number> => {
      return touch$
        .pipe(
          map(({changedTouches}: TouchEvent) => changedTouches[0].clientX)
        )
    }
    const getY = (touch$: Observable<TouchEvent>): Observable<number> => {
      return touch$
        .pipe(
          map(({changedTouches}: TouchEvent) => changedTouches[0].clientY)
        )
    }
    const swipe = (touch$: Observable<[number, number, number, number]>): Observable<string> => {
      return touch$
        .pipe(
          map(([startX, endX, startY, endY]: [number, number, number, number]) => {
            const state = {
              xDirection: startX - endX > 0 ? 'left' : 'right',
              yDirection: startY - endY > 0 ? 'up' : 'down',
              xDistance: Math.abs(startX - endX),
              yDistance: Math.abs(startY - endY)
            }
            if(Math.abs(state.xDistance - state.yDistance) > 50) {
              if(state.xDistance > state.yDistance) {
                return state.xDirection
              } else if(state.yDistance > state.xDistance) {
                return state.yDirection
              }
            } else {
              return `${state.xDirection}-${state.yDirection}`
            }
          })
        )
    }
    const touchStartsY$: Observable<number> = getY(fromEvent(document, 'touchstart') as Observable<TouchEvent>)
    const touchEndsY$: Observable<number> = getY(fromEvent(document, 'touchend') as Observable<TouchEvent>)
    const touchStartsX$: Observable<number> = getX(fromEvent(document, 'touchstart') as Observable<TouchEvent>)
    const touchEndsX$: Observable<number> = getX(fromEvent(document, 'touchend') as Observable<TouchEvent>)
    const swipe$: Observable<string> = swipe(zip(touchStartsX$, touchEndsX$, touchStartsY$, touchEndsY$))
    swipe$.subscribe((dir: string) => {
      console.log(`Swiped ${dir}`)
    })
  }
}
