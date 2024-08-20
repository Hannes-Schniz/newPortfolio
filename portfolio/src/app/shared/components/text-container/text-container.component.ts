import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-container',
  templateUrl: './text-container.component.html',
  styleUrl: './text-container.component.scss',
})
export class TextContainerComponent {
  @Input() title!: string;
  @Input() text!: string;
}
