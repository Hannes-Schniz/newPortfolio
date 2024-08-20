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
    opacity: number;
  }[] = [
    {
      title: 'Projekt 1',
      text: 'Testprojekt Text is here for Project 1',
      img: 'https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?w=1800',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 2',
      text: 'Testprojekt Text is here for Project 2',
      img: 'https://img.freepik.com/free-photo/man-walking-forest_23-2147833136.jpg?t=st=1724179299~exp=1724182899~hmac=51becf79d0b1382466d1099d746af254cae249e9203c113ce60062111b104769&w=1800',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 3',
      text: 'Testprojekt Text is here for Project 3',
      img: 'https://img.freepik.com/free-photo/beautiful-scenery-river-surrounded-by-greenery-forest_181624-40482.jpg?t=st=1724179310~exp=1724182910~hmac=51b0011e6ced44d6ab1fe6d739806d220039c5e1100a33d44350064b88906794&w=1800',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 4',
      text: 'Testprojekt Text is here for Project 4',
      img: 'https://img.freepik.com/free-photo/rocky-mountain-landscape_198169-200.jpg?t=st=1724179345~exp=1724182945~hmac=7900d4d05e8be4ee186d06ef0e0cad13830696831d6515bc0bc2b1fcb96ac627&w=826',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 5',
      text: 'Testprojekt Text is here for Project 5',
      img: 'https://img.freepik.com/free-photo/landscape-hills-forests-covered-snow-sunlight-cloudy-sky_181624-13714.jpg?t=st=1724179357~exp=1724182957~hmac=26dc6495819d475b3b19420765b2b50318ac5f8ff171f7609aeb0c11ac52eefe&w=1800',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 6',
      text: 'Testprojekt Text is here for Project 6',
      img: 'https://img.freepik.com/free-photo/snow-mountains_1112-563.jpg?t=st=1724179368~exp=1724182968~hmac=4d69b1f04135f8457b683bd205a67650137ee491d4bc8934b9be7a344548ffc9&w=1800',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 7',
      text: 'Testprojekt Text is here for Project 7',
      img: 'https://img.freepik.com/premium-photo/illustration-mouth-watering-vegan-recipes-outshining-meat-dishes-flavor-mouthfood-vegetarian-ea_1041545-1764.jpg?w=2000',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 8',
      text: 'Testprojekt Text is here for Project 8',
      img: 'https://img.freepik.com/premium-photo/exotic-flavor-fusion-international-cuisine_171965-25096.jpg?w=2000',
      classes: 'zone',
      opacity: 1,
    },
    {
      title: 'Projekt 9',
      text: 'Testprojekt Text is here for Project 9',
      img: 'https://img.freepik.com/free-photo/waffles-with-berries-cream_23-2147693418.jpg?t=st=1724186851~exp=1724190451~hmac=48fa277541a0c33eb7434ff815007426fe5b0a157611713f5790dc22bd80e22d&w=1800',
      classes: 'zone',
      opacity: 1,
    },
  ];

  constructor() {
    setInterval(() => {
      this.switchImages();
    }, 8000);
  }

  getTitle(index: number): string {
    return this.images[index].title;
  }

  getText(index: number): string {
    return this.images[index].text;
  }

  getImg(index: number): string {
    return this.images[index].img;
  }

  getPosition(index: number): string {
    return this.mapPosition(index);
  }

  getClasses(index: number): string {
    if (!this.images[index].classes) {
      return '';
    }
    return this.images[index].classes + ' ' + this.mapPosition(index);
  }

  getStyle(index: number): string {
    return (
      'opacity: ' +
      this.images[index].opacity +
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
    const randomIndexOne = Math.floor(Math.random() * this.images.length);
    this.animateFadeout(randomIndexOne);
    let randomIndexTwo = Math.floor(Math.random() * this.images.length);
    while (randomIndexOne === randomIndexTwo) {
      randomIndexTwo = Math.floor(Math.random() * this.images.length);
    }
    setTimeout(() => {
      this.animateFadeout(randomIndexTwo);
    }, 200);
    setTimeout(() => {
      this.swapImages(randomIndexOne, randomIndexTwo);
    }, 2000);
  }

  swapImages(indexOne: number, indexTwo: number): void {
    const temp = this.images[indexOne];
    this.images[indexOne] = this.images[indexTwo];

    this.images[indexTwo] = temp;
    this.animateFadein(indexTwo);
    setTimeout(() => {
      this.animateFadein(indexOne);
    }, 200);
  }

  animateFadeout(index: number): void {
    let timer = setInterval(() => {
      if (this.images[index].opacity <= 0) {
        clearInterval(timer);
      }
      this.images[index].opacity -= 0.01;
    }, 10);
  }

  animateFadein(index: number): void {
    let timer = setInterval(() => {
      if (this.images[index].opacity >= 1) {
        clearInterval(timer);
      }
      this.images[index].opacity += 0.01;
    }, 10);
  }
}
