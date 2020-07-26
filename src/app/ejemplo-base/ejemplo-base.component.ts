import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-base',
  templateUrl: './ejemplo-base.component.html',
  styleUrls: ['./ejemplo-base.component.scss']
})
export class EjemploBaseComponent implements OnInit {
  // myContext: HTMLCanvasElement;
  // myCanvas: CanvasRenderingContext2D;
  canvas;
  context;
  constructor() { 
 
  }

  ngOnInit(): void {
    this.dibujar('tile.png',0,0);
  }

  dibujar(nombre,x,y){
    this.canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    let context = <CanvasRenderingContext2D> this.canvas.getContext('2d');

    var img = new Image();
    img.src = 'assets/'+nombre;

    img.onload= function (){
      console.log("Ya cargó");
      context.drawImage(img, x, y);
    };



  }





  descargar(){
    var image = this.canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "imagen.png";
    link.href = image;
    link.click();
  }


}

// window.onload = function ()
// {
//     this.myCanvas  = document.getElementById("myCanvas");
//     this.myContext = this.myCanvas .getContext('2d');

//     var img = new Image();
//     img.src = 'assets/tile.png';
//     setTimeout(() => {
//       this.myContext.drawImage(img, 10, 10);
//     }, 5000);
    
//     // img.onload = function (e)
//     // {
//     //   this.myContext.drawImage(img, 10, 10);
//     // }
// }