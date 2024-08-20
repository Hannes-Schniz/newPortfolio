import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  inner = 5;
  outer = 5;
  getStyle(field: string): string {
    if (field == 'inner') {
      return 'width: ' + this.inner + 'vw;';
    }
    return 'width: ' + this.outer + 'vw;';
  }

  growInner(): void {
    let time = setInterval(() => {
      if (this.inner == 30) {
        this.outer = 5;
        clearInterval(time);
        return;
      }
      this.inner += 1;
      if (this.outer > 5) {
        this.outer -= 1;
      }
    }, 10);
  }

  shrinkInner(): void {
    let time = setInterval(() => {
      if (this.inner == 5) {
        clearInterval(time);
        return;
      }
      this.inner -= 1;
      if (this.outer < 30) {
        this.outer += 1;
      }
    }, 10);
  }

  growOuter(): void {
    let time = setInterval(() => {
      if (this.outer == 30) {
        clearInterval(time);
        return;
      }
      this.outer += 1;
      if (this.inner > 5) {
        this.inner -= 1;
      }
    }, 10);
  }

  shrinkOuter(): void {
    let shrinkBoth = this.inner >= 30;
    let time = setInterval(() => {
      if (this.outer == 5 && this.inner == 5) {
        clearInterval(time);
        return;
      }
      if (this.outer > 5) {
        this.outer -= 1;
      }
      if (shrinkBoth && this.inner > 5) {
        this.inner -= 1;
      }
    }, 10);
  }
}
