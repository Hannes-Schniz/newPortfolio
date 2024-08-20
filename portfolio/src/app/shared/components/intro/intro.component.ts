import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  public images: {
    title: string;
    text: string;
    img: string;
    position: string;
  }[] = [
    {
      title: 'Projekt 1',
      text: 'Testprojekt Text is here for Project 1',
      img: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?w=1800',
      position: 'one zone',
    },
    {
      title: 'Projekt 2',
      text: 'Testprojekt Text is here for Project 2',
      img: 'https://img.freepik.com/free-photo/man-walking-forest_23-2147833136.jpg?t=st=1724179299~exp=1724182899~hmac=51becf79d0b1382466d1099d746af254cae249e9203c113ce60062111b104769&w=1800',
      position: 'two zone',
    },
    {
      title: 'Projekt 3',
      text: 'Testprojekt Text is here for Project 3',
      img: 'https://img.freepik.com/free-photo/beautiful-scenery-river-surrounded-by-greenery-forest_181624-40482.jpg?t=st=1724179310~exp=1724182910~hmac=51b0011e6ced44d6ab1fe6d739806d220039c5e1100a33d44350064b88906794&w=1800',
      position: 'three zone',
    },
    {
      title: 'Projekt 4',
      text: 'Testprojekt Text is here for Project 4',
      img: 'https://img.freepik.com/free-photo/rocky-mountain-landscape_198169-200.jpg?t=st=1724179345~exp=1724182945~hmac=7900d4d05e8be4ee186d06ef0e0cad13830696831d6515bc0bc2b1fcb96ac627&w=826',
      position: 'four zone',
    },
    {
      title: 'Projekt 5',
      text: 'Testprojekt Text is here for Project 5',
      img: 'https://img.freepik.com/free-photo/landscape-hills-forests-covered-snow-sunlight-cloudy-sky_181624-13714.jpg?t=st=1724179357~exp=1724182957~hmac=26dc6495819d475b3b19420765b2b50318ac5f8ff171f7609aeb0c11ac52eefe&w=1800',
      position: 'five zone',
    },
    {
      title: 'Projekt 6',
      text: 'Testprojekt Text is here for Project 6',
      img: 'https://img.freepik.com/free-photo/snow-mountains_1112-563.jpg?t=st=1724179368~exp=1724182968~hmac=4d69b1f04135f8457b683bd205a67650137ee491d4bc8934b9be7a344548ffc9&w=1800',
      position: 'six zone',
    },
  ];

  constructor() {}
}
