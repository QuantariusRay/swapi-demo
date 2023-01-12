import { Component } from '@angular/core';
import { BylineDirective } from '../../directives/byline.directive';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="starwars-demo">
      <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" class="star">
      <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" class="wars">
      <h2 class="byline" id="byline" byLine>Awaken The Demo</h2>
    </div>
  `,
  styleUrls: ['loading.component.scss'],
  imports: [BylineDirective]
})
export class LoadingComponent {

}
