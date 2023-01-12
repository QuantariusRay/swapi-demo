import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'card',
  template: `
    <div class="card">
      <div class="inner">
        <div class="front">
          <ng-content select="[front]"></ng-content>
        </div>
        <div class="back">
          <ng-content select="[back]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .card {
      border: 1px solid #f1f1f1;
      width: 300px;
      height: 300px;
      cursor: pointer;
      perspective: 1000px;
      background-color: transparent;
    }

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    .card:hover .inner {
      transform: rotateY(180deg);
    }

    .front, .back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .front {
      background-color: #bbb;
      text-align: center;
    }

    .back {
      background-color: dodgerblue;
      color: white;
      transform: rotateY(180deg);
    }
  `]
})
export class CardComponent {

}
