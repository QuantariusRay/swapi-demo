import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[byLine]',
  standalone: true
})
export class BylineDirective implements OnInit {

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    let byline = this.element.nativeElement;
    let bylineText = byline.innerHTML;
    let bylineArr = bylineText.split('');

    byline.innerHTML = '';

    let span;
    let letter;

    bylineArr.forEach((line: string) => {
      span = this.renderer.createElement('span');
      letter = this.renderer.createText(line);
      if (line === ' ') {
        byline.appendChild(letter);
      } else {
        span.appendChild(letter);
        byline.appendChild(span);
      }
    });
  }
}
