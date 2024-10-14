import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  imageStyle=""

  constructor() {
    let dimentions= window.innerHeight / 3;
    this.imageStyle = "height:" + dimentions + "px; width:" + dimentions +"px;"
    console.log(this.imageStyle)
  }
}
