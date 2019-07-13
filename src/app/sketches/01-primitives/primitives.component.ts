import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import { WIDTH, HEIGHT } from './config';


@Component({
  selector: 'app-primitives',
  templateUrl: './primitives.component.html',
  styleUrls: ['./primitives.component.scss']
})
export class PrimitivesComponent implements OnInit, OnDestroy {

  private sketch: any;

  constructor() { }


  ngOnInit() {
    const s = (p) => {

      const squareSize = 20;
      let angle = 0;

      p.setup = () => {
        p.createCanvas(WIDTH, HEIGHT);
        p.background(0);
        p.frameRate(30);
      };

      p.draw = () => {
        p.background(0);
        const sineValue = p.abs(p.sin(angle));
        const numOfLines = p.int(sineValue * 20);

        for (let i = 0; i < numOfLines; i++) {
          const size = squareSize * i;
          const color = 10 * i;
          p.fill(0, 0, 0, 0);
          p.stroke(color);
          p.square(this.getCenter(WIDTH, size), this.getCenter(WIDTH, size), size);
        }

        angle += 0.1;
      };

    };

    this.sketch = new p5(s);

  }

  private getCenter(canvasWidth: number, size: number): number {
    return (canvasWidth / 2) - (size / 2);
  }

  ngOnDestroy() {
    this.sketch.remove();
  }



}
