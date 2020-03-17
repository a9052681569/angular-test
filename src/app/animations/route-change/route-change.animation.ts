import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';

export const routeChangeAnimation = trigger('routeChangeAnimation', [
    transition('userlist <=> countries', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          opacity: 0
        })
      ]),
      query(':enter', [style({ opacity: 0 })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1 }))])
      ]),
      query(':enter', animateChild())
    ])
  ])