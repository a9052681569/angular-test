import { trigger, transition, style, group, animate, keyframes } from '@angular/animations';

export const softAppear = trigger('softAppear', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateX(100px)'}),
      group([
        animate('0.3s', style({ transform: 'translateX(0)' })),
        animate('0.2s', style({ opacity: 1 }))
      ])
    ]),
    transition(':leave', [
      group([
        animate('0.2s', keyframes([
          style({ color: 'red', offset: 0 }),
          style({ color: 'green', offset: 0.67 }),
          style({ color: 'blue', offset: 1 })
        ])),
        animate('0.2s', style({ transform: 'translateX(100px)'})),
        animate('0.1s', style({ opacity: 1 }))
      ])])
  ])