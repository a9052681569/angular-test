import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, fromEvent, zip } from 'rxjs';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  public bgColor: string = 'purple'


  private colorsX: string[] = ['purple', 'red', 'green', 'blue']
  private colorsY: string[] = ['yellow', 'black', 'chartreuse', 'aqua']
  private countX: number = 0
  private countY: number = 0

  private countIncreacer(count: number, arr: string[]): number {
    count < arr.length - 1 ? count++ : count = 0
    return count
  }
  private countDecreacer(count: number, arr: string[]): number {
    count > 0 ? count-- : count = arr.length - 1
    return count
  }

  private xChanger(direction: string): void {
    this.countX = direction === 'right' ? 
    this.countIncreacer(this.countX, this.colorsX) 
    : 
    this.countDecreacer(this.countX, this.colorsX) 
    
    this.bgColor = this.colorsX[this.countX]
  }
  private yChanger(direction: string): void {
    this.countY = direction === 'up' ?
    this.countIncreacer(this.countY, this.colorsY) 
    :
    this.countDecreacer(this.countY, this.colorsY) 

    this.bgColor = this.colorsY[this.countY]
  }
  private swipeDesider(direction: string) {
    direction === 'right' || direction === 'left' ? this.xChanger(direction) : this.yChanger(direction)
  }

  private getMouseX(click$: Observable<MouseEvent>): Observable<number> {
    return click$
      .pipe(
        map(({clientX}: MouseEvent) => clientX)
      )
  }
  private getMouseY(click$: Observable<MouseEvent>): Observable<number> {
    return click$
      .pipe(
        map(({clientY}: MouseEvent) => clientY)
      )
  }
  private getTouchX(click$: Observable<TouchEvent>): Observable<number> {
    return click$
      .pipe(
        map(({changedTouches}: TouchEvent) => changedTouches[0].clientX)
      )
  }
  private getTouchY(click$: Observable<TouchEvent>): Observable<number> {
    return click$
      .pipe(
        map(({changedTouches}: TouchEvent) => changedTouches[0].clientY)
      )
  }
  private swipeDirection(coords: Observable<[number, number, number, number]>): Observable<string> {
    return coords
      .pipe(
        map(([startX, endX, startY, endY]: [number, number, number, number]) => {
          const state = {
            xDirection: startX - endX > 0 ? 'left' : 'right',
            yDirection: startY - endY > 0 ? 'up' : 'down',
            xDistance: Math.abs(startX - endX),
            yDistance: Math.abs(startY - endY)
          }
          
          if(state.xDistance > state.yDistance) {
            return state.xDirection
          } else {
            return state.yDirection
          }
          
        })
      )
  }
  
  
  private getThisSwiperStarted(): void {
    const swiperBox: HTMLElement = document.querySelector('.swiper__box')
    const mouseStartsY$: Observable<number> = this.getMouseY(fromEvent(swiperBox, 'mousedown') as Observable<MouseEvent>)
    const mouseEndsY$: Observable<number> = this.getMouseY(fromEvent(swiperBox, 'mouseup') as Observable<MouseEvent>)
    const mouseStartsX$: Observable<number> = this.getMouseX(fromEvent(swiperBox, 'mousedown') as Observable<MouseEvent>)
    const mouseEndsX$: Observable<number> = this.getMouseX(fromEvent(swiperBox, 'mouseup') as Observable<MouseEvent>)
    const mouseSwipeDirection$: Observable<string> = this.swipeDirection(zip(mouseStartsX$, mouseEndsX$, mouseStartsY$, mouseEndsY$))

    mouseSwipeDirection$.subscribe((swipeDirection: string) => {
      this.swipeDesider(swipeDirection)
    })


    const touchStartsY$: Observable<number> = this.getTouchY(fromEvent(swiperBox, 'touchstart') as Observable<TouchEvent>)
    const touchEndsY$: Observable<number> = this.getTouchY(fromEvent(swiperBox, 'touchend') as Observable<TouchEvent>)
    const touchStartsX$: Observable<number> = this.getTouchX(fromEvent(swiperBox, 'touchstart') as Observable<TouchEvent>)
    const touchEndsX$: Observable<number> = this.getTouchX(fromEvent(swiperBox, 'touchend') as Observable<TouchEvent>)
    
    const touchSwipeDirection$: Observable<string> = this.swipeDirection(zip(touchStartsX$, touchEndsX$, touchStartsY$, touchEndsY$))

    touchSwipeDirection$.subscribe((swipeDirection: string) => {
      this.swipeDesider(swipeDirection)
    })
    
  }
  ngOnInit(): void {
    this.getThisSwiperStarted()
  }

}
