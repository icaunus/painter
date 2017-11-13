import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShapesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    let circleBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("circleBtn");
    let solidLineBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("solidLineBtn");
    let dashedLineBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("dashedLineBtn");
    let dottedLineBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("dottedLineBtn");
    let lineType:HTMLInputElement = <HTMLInputElement> document.getElementById("lineType");

    circleBtn.addEventListener("click", function(event) {
      lineType.value = "circle";
    });

    solidLineBtn.addEventListener("click", function(event) {
      lineType.value = "solidLine";
    });
    
    dashedLineBtn.addEventListener("click", function(event) {
      lineType.value = "dashedline";
    });

    dottedLineBtn.addEventListener("click", function(event) {
      lineType.value = "dottedLine";
    });
  }
}
