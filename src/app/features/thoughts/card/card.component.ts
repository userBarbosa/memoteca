import { Thought } from './../../../shared/models/Thought.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() thought: Thought = {
    // id: '0',
    content: '',
    author: '',
    template: '',
  };

  constructor() {}

  thoughtWidth(): string {
    if (this.thought.content.length > 256) {
      return 'thought-g';
    }
    return 'thought-p';
  }
}
