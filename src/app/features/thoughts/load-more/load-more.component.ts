import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrl: './load-more.component.css',
})
export class LoadMoreComponent {
  @Input() hasNextPage: boolean = false;

  constructor() {}

  handleDisabledButton(): string {
    if (!this.hasNextPage) {
      return "button load-more disabled"
    }
    return "button load-more"
  }
  
  handleTooltip(): string {
    if (!this.hasNextPage) {
      return "Não há mais pensamentos a serem carregados."
    }
    return "Carregue mais pensamentos."
  }
}
