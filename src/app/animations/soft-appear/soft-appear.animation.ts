import { trigger, transition, style, group, animate, keyframes } from '@angular/animations';

export const softAppear = trigger('softAppear', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateY(300px)'}),
      group([
        animate('.3s', style({ transform: 'translateY(0)' })),
        animate('.2s', style({ opacity: 1 }))
      ])
    ]),
    transition(':leave', [
      group([
        animate('.2s', style({ height: 0, padding: 0, margin: 0, border: 0 })),
        animate('.3s', keyframes([
          style({ color: 'red', offset: 0 }),
          style({ color: 'green', offset: 0.67 }),
          style({ color: 'blue', offset: 1 })
        ])),
        animate('.3s', style({ transform: 'translateX(300px)'})),
        animate('.2s', style({ opacity: 0 }))
      ])
    ])
  ])