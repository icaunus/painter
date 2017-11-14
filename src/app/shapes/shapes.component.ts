import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DrawAreaComponent } from '../drawarea/drawarea.component';

@Component({
  selector: 'shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShapesComponent implements OnInit {
  private drawArea:DrawAreaComponent;

  constructor() {
    this.drawArea = new DrawAreaComponent();
  }

  ngOnInit() {
    let circleBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("circleBtn");
    let solidLineBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("solidLineBtn");
    let dashedLineBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("dashedLineBtn");
    let dottedLineBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("dottedLineBtn");
    let lineDash:HTMLInputElement = <HTMLInputElement> document.getElementById("lineType");
    let canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("painterCanvas");
    let context = canvas.getContext("2d"); 
    let printCoordinates = (event) => {
      var oldX = event.clientX;
      var oldY = event.clientY;
      var statusBar = document.getElementById("statusBar");

      statusBar.innerHTML = oldX + ", " + oldY;
    };

    circleBtn.addEventListener("click", function(event) {
      var oldX = event.clientX;
      var oldY = event.clientY;
       
      printCoordinates(event);
      context.beginPath();
      context.arc(oldX, oldY, 40,0,2 * Math.PI);
      context.closePath();
      context.stroke();
    });

    solidLineBtn.addEventListener("click", function(event) {
      var oldX = event.clientX;
      var newX = oldX - 50;
      var oldY = event.clientY;
      var newY = oldY + 50;

      printCoordinates(event);
      context.setLineDash([1]);
      context.moveTo(oldX, oldY);
      context.lineTo(newX, newY);
      context.stroke();
    });
    
    dashedLineBtn.addEventListener("click", function(event) {
      var oldX = event.clientX;
      var newX = oldX - 50;
      var oldY = event.clientY;
      var newY = oldY + 50;

      context.setLineDash([50, 5]);
      context.moveTo(oldX, oldY);
      context.lineTo(newX, newY);
      context.stroke();
    });

    dottedLineBtn.addEventListener("click", function(event) {
      var oldX = event.clientX;
      var newX = oldX - 50;
      var oldY = event.clientY;
      var newY = oldY + 50;

      printCoordinates(event);
      context.setLineDash([10, 2]);
      context.moveTo(oldX, oldY);
      context.lineTo(newX, newY);
      context.stroke();
    });
  }
}
