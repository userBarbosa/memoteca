import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrl: './load.component.css',
})
export class LoadComponent {
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
