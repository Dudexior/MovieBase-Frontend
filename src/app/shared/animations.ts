import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideHeight = trigger('slideHeight', [
  state('void', style({
    height: '0px',
    overflow: 'hidden'
  })),
  state('*', style({
    height: '*',
    overflow: 'hidden'
  })),

  transition('* <=> void', [
    animate(200)
  ])
]);
