import { Component, OnInit } from '@angular/core';

// import 'fabric';
declare var fabric: any;

@Component({
  selector: 'app-edit-fabric',
  templateUrl: './edit-fabric.component.html',
  styleUrls: ['./edit-fabric.component.scss']
})
export class EditFabricComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  constructor() { }

  ngOnInit(): void {

    var canvas = new fabric.Canvas('canvas');
    var circle = new fabric.Circle({
      radius: 20,
      fill: 'green',
      left: 100, top: 100
    });
    var rectangle = new fabric.Rect({
      fill: 'green',
      left: 100, top: 100,
      width: 30,
      height: 60
    });
    canvas.add(circle);
    canvas.add(rectangle);




    fabric.Image.fromURL('assets/pollo.png', function (oImg) {
      oImg.set({ left: 400, top: 300 });
      canvas.add(oImg);
    });

    fabric.Image.fromURL('assets/pollo.png', function (oImg) {
      // scale image down, and flip it, before adding it onto canvas
      oImg.scale(0.5).set('flipX', true);
      canvas.add(oImg);
    });








  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}