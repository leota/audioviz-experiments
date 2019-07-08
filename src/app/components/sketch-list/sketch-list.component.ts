import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-sketch-list',
  templateUrl: './sketch-list.component.html',
  styleUrls: ['./sketch-list.component.scss']
})
export class SketchListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const s = (p) => { 
      p.remove();
    }


    const sketch = new p5(s);
  }

}
