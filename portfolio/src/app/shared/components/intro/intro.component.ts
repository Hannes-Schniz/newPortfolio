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
    style?: string;
    classes?: string;
  }[] = [
    {
      title: 'Projekt 1',
      text: 'Testprojekt Text is here for Project 1',
      img: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?w=1800',
      classes: 'zone',
    },
    {
      title: 'Projekt 2',
      text: 'Testprojekt Text is here for Project 2',
      img: 'https://img.freepik.com/free-photo/man-walking-forest_23-2147833136.jpg?t=st=1724179299~exp=1724182899~hmac=51becf79d0b1382466d1099d746af254cae249e9203c113ce60062111b104769&w=1800',
      classes: 'zone',
    },
    {
      title: 'Projekt 3',
      text: 'Testprojekt Text is here for Project 3',
      img: 'https://img.freepik.com/free-photo/beautiful-scenery-river-surrounded-by-greenery-forest_181624-40482.jpg?t=st=1724179310~exp=1724182910~hmac=51b0011e6ced44d6ab1fe6d739806d220039c5e1100a33d44350064b88906794&w=1800',
      classes: 'zone',
    },
    {
      title: 'Projekt 4',
      text: 'Testprojekt Text is here for Project 4',
      img: 'https://img.freepik.com/free-photo/rocky-mountain-landscape_198169-200.jpg?t=st=1724179345~exp=1724182945~hmac=7900d4d05e8be4ee186d06ef0e0cad13830696831d6515bc0bc2b1fcb96ac627&w=826',
      classes: 'zone',
    },
    {
      title: 'Projekt 5',
      text: 'Testprojekt Text is here for Project 5',
      img: 'https://img.freepik.com/free-photo/landscape-hills-forests-covered-snow-sunlight-cloudy-sky_181624-13714.jpg?t=st=1724179357~exp=1724182957~hmac=26dc6495819d475b3b19420765b2b50318ac5f8ff171f7609aeb0c11ac52eefe&w=1800',
      classes: 'zone',
    },
    {
      title: 'Projekt 6',
      text: 'Testprojekt Text is here for Project 6',
      img: 'https://img.freepik.com/free-photo/snow-mountains_1112-563.jpg?t=st=1724179368~exp=1724182968~hmac=4d69b1f04135f8457b683bd205a67650137ee491d4bc8934b9be7a344548ffc9&w=1800',
      classes: 'zone',
    },
    {
      title: 'Projekt 7',
      text: 'Testprojekt Text is here for Project 7',
      img: 'https://img.freepik.com/premium-photo/illustration-mouth-watering-vegan-recipes-outshining-meat-dishes-flavor-mouthfood-vegetarian-ea_1041545-1764.jpg?w=2000',
      classes: 'zone',
    },
    {
      title: 'Projekt 8',
      text: 'Testprojekt Text is here for Project 8',
      img: 'https://img.freepik.com/premium-photo/exotic-flavor-fusion-international-cuisine_171965-25096.jpg?w=2000',
      classes: 'zone',
    },
    {
      title: 'Projekt 9',
      text: 'Testprojekt Text is here for Project 9',
      img: 'https://img.freepik.com/free-photo/waffles-with-berries-cream_23-2147693418.jpg?t=st=1724186851~exp=1724190451~hmac=48fa277541a0c33eb7434ff815007426fe5b0a157611713f5790dc22bd80e22d&w=1800',
      classes: 'zone',
    },
    {
      title: 'Projekt 10',
      text: 'Testprojekt Text is here for Project 10',
      img: 'https://img.freepik.com/free-photo/from-opened-books_23-2147779265.jpg?t=st=1724190804~exp=1724194404~hmac=eef188c6ee90c89f288fcf1959193590ea66ba450132e6ecd047e0fec612eb47&w=826',
      classes: 'zone',
    },
    {
      title: 'Projekt 11',
      text: 'Testprojekt Text is here for Project 11',
      img: 'https://img.freepik.com/free-photo/view-books-arrangement_23-2148882757.jpg?t=st=1724190822~exp=1724194422~hmac=51d98b6d015ffbf7646c691bd4045bf9afd9d51a6790a423217ea995dccc381a&w=2000',
      classes: 'zone',
    },
    {
      title: 'Projekt 12',
      text: 'Testprojekt Text is here for Project 12',
      img: 'https://img.freepik.com/free-photo/corridor-server-room-data-center_181624-61663.jpg?t=st=1724190886~exp=1724194486~hmac=23701b8dacd45363dcbc91ddc75f4c7d08980d5a5b5889bc3578879c08827452&w=1800',
      classes: 'zone',
    },
    {
      title: 'Projekt 13',
      text: 'Testprojekt Text is here for Project 13',
      img: 'https://img.freepik.com/free-photo/cartoon-woman-wearing-vr-glasses_23-2151136837.jpg?t=st=1724190922~exp=1724194522~hmac=3650ee51f4e1abf29b960e5d4bfa5f066b186202711fc122f7f02cdd50e9f0a7&w=1800',
      classes: 'zone',
    },
  ];

  public screen: {
    title: string;
    text: string;
    img: string;
    style?: string;
    classes?: string;
  }[] = [
    this.images[0],
    this.images[1],
    this.images[2],
    this.images[3],
    this.images[4],
    this.images[5],
    this.images[6],
    this.images[7],
    this.images[8],
  ];

  public opacities = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() {
    setInterval(() => {
      this.switchInImage();
    }, 12000);
  }

  getTitle(index: number): string {
    return this.screen[index].title;
  }

  getText(index: number): string {
    return this.screen[index].text;
  }

  getImg(index: number): string {
    return this.screen[index].img;
  }

  getPosition(index: number): string {
    return this.mapPosition(index);
  }

  getClasses(index: number): string {
    if (!this.screen[index].classes) {
      return '';
    }
    return this.screen[index].classes + ' ' + this.mapPosition(index);
  }

  getStyle(index: number): string {
    return (
      'opacity: ' +
      this.opacities[index] +
      '; grid-area: ' +
      this.mapPosition(index)
    );
  }

  mapPosition(index: number): string {
    switch (index) {
      case 0:
        return 'one';
      case 1:
        return 'two';
      case 2:
        return 'three';
      case 3:
        return 'four';
      case 4:
        return 'five';
      case 5:
        return 'six';
      case 6:
        return 'seven';
      case 7:
        return 'eight';
      case 8:
        return 'nine';
      default:
        return '';
    }
  }

  switchImages(): void {
    const randomIndexOne = Math.floor(Math.random() * this.screen.length);
    this.animateFadeout(randomIndexOne);
    let randomIndexTwo = Math.floor(Math.random() * this.screen.length);
    while (randomIndexOne === randomIndexTwo) {
      randomIndexTwo = Math.floor(Math.random() * this.screen.length);
    }
    setTimeout(() => {
      this.animateFadeout(randomIndexTwo);
    }, 2000);
    setTimeout(() => {
      this.swapImages(randomIndexOne, randomIndexTwo);
    }, 4000);
  }

  switchInImage(): void {
    const randomIndexOne = Math.floor(Math.random() * this.screen.length);
    this.animateFadeout(randomIndexOne);
    let randomIndexTwo = Math.floor(Math.random() * this.images.length);
    while (this.screen.includes(this.images[randomIndexTwo])) {
      randomIndexTwo = Math.floor(Math.random() * this.images.length);
    }
    setTimeout(() => {
      this.screen[randomIndexOne] = this.images[randomIndexTwo];
    }, 2000);
    setTimeout(() => {
      this.animateFadein(randomIndexOne);
    }, 2500);
  }

  swapImages(indexOne: number, indexTwo: number): void {
    const temp = this.images[indexOne];
    this.screen[indexOne] = this.screen[indexTwo];

    this.screen[indexTwo] = temp;
    this.animateFadein(indexTwo);
    setTimeout(() => {
      this.animateFadein(indexOne);
    }, 2000);
  }

  animateFadeout(index: number): void {
    let timer = setInterval(() => {
      if (this.opacities[index] <= 0) {
        clearInterval(timer);
      }
      this.opacities[index] -= 0.01;
    }, 10);
  }

  animateFadein(index: number): void {
    let timer = setInterval(() => {
      if (this.opacities[index] >= 1) {
        clearInterval(timer);
      }
      this.opacities[index] += 0.01;
    }, 10);
  }
}
