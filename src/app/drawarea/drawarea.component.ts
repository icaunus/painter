import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { Context } from 'vm';

@Component({
  selector: 'drawarea',
  templateUrl: './drawarea.component.html',
  styleUrls: ['./drawarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DrawAreaComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  getMousePosition(canvas, event) {
    
  }

  drawLine() {    
    var mousePos;
    var canvas = <HTMLCanvasElement> document.getElementById('painterCanvas');
    canvas.addEventListener('click', function(evt) {
      var rect = canvas.getBoundingClientRect();
      //alert(rect.left);
      mousePos = {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
          };
      // = this.getMousePosition(canvas, evt);
      console.log("x = " + evt.clientX + ", y = " + evt.clientY);
    }, false);
    var context = canvas.getContext("2d");
    
alert(mousePos);
    
    //let startPosition:any = 
    context.moveTo(mousePos.x, mousePos.y);
    context.lineTo(mousePos.x + 100, mousePos.y + 100);
    context.stroke();
  }



/*
   */
}
