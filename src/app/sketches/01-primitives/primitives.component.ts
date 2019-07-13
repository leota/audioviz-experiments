import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound';


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

      const width = window.innerWidth;
      const height = 600;

      let osc;
      let playing = false;

      p.preload = () => {
        console.log('preload');
      };

      p.setup = () => {
        p.createCanvas(width, height);
        p.background(255, 0, 255);

        osc = new p5.Oscillator();
        osc.setType('sine');
        osc.freq(240);
        osc.amp(0);
        osc.start();
      };

      p.draw = () => {
        p.textSize(24);
        p.text('click to play', width / 2, height / 2);
      };

      p.mouseClicked = () => {
        if (p.mouseX > 0 && p.mouseX < width && p.mouseY < height && p.mouseY > 0) {
          if (!playing) {
            // ramp amplitude to 0.5 over 0.05 seconds
            osc.amp(0.5, 0.05);
            playing = true;
            p.background(0, 255, 255);
          } else {
            // ramp amplitude to 0 over 0.5 seconds
            osc.amp(0, 0.5);
            playing = false;
            p.background(255, 0, 255);
          }
        }
      };

    };

    this.sketch = new p5(s);

  }

  ngOnDestroy() {
    this.sketch.remove();
  }


}
