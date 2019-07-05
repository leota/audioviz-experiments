import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound';

@Component({
  selector: 'app-test-sketch',
  templateUrl: './test-sketch.component.html',
  styleUrls: ['./test-sketch.component.scss']
})
export class TestSketchComponent implements OnInit {

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
        p.background(255, 0, 0);

        osc = new p5.Oscillator();
        osc.setType('sine');
        osc.freq(240);
        osc.amp(0);
        osc.start();
      };

    };

    const sketch = new p5(s);
  }


}
