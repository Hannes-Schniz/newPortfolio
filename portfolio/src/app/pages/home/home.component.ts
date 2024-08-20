import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  MIN_WIDTH = 3;
  MAX_WIDTH = 30;

  buttonStyle = 'width: ' + this.MIN_WIDTH + 'vw';

  inner = this.MIN_WIDTH;
  outer = this.MIN_WIDTH;
  getStyle(field: string): string {
    if (field == 'inner') {
      return 'width: ' + this.inner + 'vw;';
    }
    return 'width: ' + this.outer + 'vw;';
  }

  growInner(): void {
    let time = setInterval(() => {
      if (this.inner == this.MAX_WIDTH) {
        this.outer = this.MIN_WIDTH;
        clearInterval(time);
        return;
      }
      this.inner += 1;
      if (this.outer > this.MIN_WIDTH) {
        this.outer -= 1;
      }
    }, 10);
  }

  shrinkInner(): void {
    let time = setInterval(() => {
      if (this.inner == this.MIN_WIDTH) {
        clearInterval(time);
        return;
      }
      this.inner -= 1;
      if (this.outer < this.MAX_WIDTH) {
        this.outer += 1;
      }
    }, 10);
  }

  growOuter(): void {
    let time = setInterval(() => {
      if (this.outer == this.MAX_WIDTH) {
        clearInterval(time);
        return;
      }
      this.outer += 1;
      if (this.inner > this.MIN_WIDTH) {
        this.inner -= 1;
      }
    }, 10);
  }

  shrinkOuter(): void {
    let shrinkBoth = this.inner >= this.MAX_WIDTH;
    let time = setInterval(() => {
      if (this.outer == this.MIN_WIDTH && this.inner == this.MIN_WIDTH) {
        clearInterval(time);
        return;
      }
      if (this.outer > this.MIN_WIDTH) {
        this.outer -= 1;
      }
      if (shrinkBoth && this.inner > this.MIN_WIDTH) {
        this.inner -= 1;
      }
    }, 10);
  }
}
