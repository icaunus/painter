import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'drawarea',
  templateUrl: './drawarea.component.html',
  styleUrls: ['./drawarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DrawAreaComponent implements OnInit {
  private painterCanvas:HTMLCanvasElement;

  constructor() {
    // this.painterCanvas = <HTMLCanvasElement> document.getElementById("painterCanvas");

  }

  ngOnInit() {
    this.painterCanvas = <HTMLCanvasElement> document.getElementById("painterCanvas");
    var that = this;
    var mousePositionStore = [];
    this.painterCanvas.addEventListener(
      "click",  
      function(evt) {
        var rect = that.painterCanvas.getBoundingClientRect();
        var context = this.getContext("2d");
        var mousePosition = {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
        var oldMouse;
        var newMouse;

        context.setLineDash([10]);
        mousePositionStore.push(mousePosition);
        context.moveTo(mousePosition.x, mousePosition.y);

        if (mousePositionStore.length > 1) {
          oldMouse = mousePositionStore[mousePositionStore.length - 2];
          newMouse = mousePositionStore[mousePositionStore.length - 1];
          context.moveTo(oldMouse.x, oldMouse.y);

          if (newMouse.x > oldMouse.x) {
            context.lineTo(newMouse.x - oldMouse.x, newMouse.y - oldMouse.y);
          }
          else if (newMouse.x < oldMouse.x) {
            context.lineTo(oldMouse.x - newMouse.x, oldMouse.y - newMouse.y);
          }

          context.stroke();
        } 
      },
      false
    );    
  }
}
