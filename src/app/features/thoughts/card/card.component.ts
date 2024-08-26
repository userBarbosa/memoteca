import { ThoughtService } from '../../../shared/services/thought/thought.service';
import {
  FavoriteIconPath,
  Thought,
} from './../../../shared/models/Thought.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private service: ThoughtService) {}

  @Input() thought: Thought = {
    id: '',
    content: '',
    author: '',
    template: '',
    favorite: false,
  };

  @Input() favoriteList: Thought[] = [];

  thoughtWidth(): string {
    if (this.thought.content.length > 256) {
      return 'thought-g';
    }
    return 'thought-p';
  }

  getFavoriteIcon(): string {
    if (this.thought.favorite) {
      return FavoriteIconPath.ACTIVE;
    }
    return FavoriteIconPath.INACTIVE;
  }

  toggleFavorite(): void {
    this.service.updateFavorite(this.thought).subscribe(() => {
      const index = this.favoriteList.indexOf(this.thought);
      this.favoriteList.splice(index, 1);
    });
  }
}
