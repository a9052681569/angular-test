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

  private getX(click$: Observable<MouseEvent>): Observable<number> {
    return click$
      .pipe(
        map(({clientX}: MouseEvent) => clientX)
      )
  }
  private getY(click$: Observable<MouseEvent>): Observable<number> {
    return click$
      .pipe(
        map(({clientY}: MouseEvent) => clientY)
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
    const startsY$: Observable<number> = this.getY(fromEvent(swiperBox, 'mousedown') as Observable<MouseEvent>)
    const endsY$: Observable<number> = this.getY(fromEvent(swiperBox, 'mouseup') as Observable<MouseEvent>)
    const startsX$: Observable<number> = this.getX(fromEvent(swiperBox, 'mousedown') as Observable<MouseEvent>)
    const endsX$: Observable<number> = this.getX(fromEvent(swiperBox, 'mouseup') as Observable<MouseEvent>)
    const swipeDirection$: Observable<string> = this.swipeDirection(zip(startsX$, endsX$, startsY$, endsY$))
   
    swipeDirection$.subscribe((swipeDirection: string) => {
      this.swipeDesider(swipeDirection)
    })
  }
  ngOnInit(): void {
    this.getThisSwiperStarted()
  }

}
