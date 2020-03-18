import { trigger, transition, style, query, animate, sequence } from '@angular/animations';

export const routeChangeAnimation = trigger('routeChangeAnimation', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      sequence([
        query(':leave', [animate('.2s ease-out', style({ opacity: 0 }))], { optional: true }),
        query(':enter', [animate('.2s ease-out', style({ opacity: 1 }))], { optional: true })
      ])
    ])
  ])