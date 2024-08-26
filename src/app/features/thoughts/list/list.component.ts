import { ConfigService } from './../../../shared/services/config/config.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../../../shared/models/Thought.model';
import { ThoughtService } from '../../../shared/services/thought/thought.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListThoughtsComponent implements OnInit {
  constructor(private service: ThoughtService, private cs: ConfigService) {
    this.routes = this.cs.ROUTES;
  }
  readonly routes;

  thoughtList: Thought[] = [];
  page: number = 1;
  hasNextPage: boolean = true;
  filter: string = '';
  favoriteOnly: boolean = false;
  favoriteList: Thought[] = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.page = 1;
    this.hasNextPage = true;
    this.service
      .list(this.page, this.favoriteOnly, this.filter)
      .subscribe((thoughts) => {
        this.thoughtList = thoughts;
        if (this.favoriteOnly) {
          this.favoriteList = thoughts;
        }
        if (
          !thoughts?.length ||
          thoughts.length % this.cs.ITENS_PER_PAGE !== 0
        ) {
          this.hasNextPage = false;
        }
      });
  }

  loadNextPage(): void {
    this.service
      .list(++this.page, this.favoriteOnly, this.filter)
      .subscribe((thoughts) => {
        this.thoughtList.push(...thoughts);
        if (
          !thoughts?.length ||
          thoughts.length % this.cs.ITENS_PER_PAGE !== 0
        ) {
          this.hasNextPage = false;
        }
      });
  }

  toggleFavorite(): void {
    this.favoriteOnly = !this.favoriteOnly;
    this.refresh();
  }

  toggleStyle(): string {
    return this.favoriteOnly ? 'toggled-on' : 'toggled-off';
  }

  searchThoughts() {
    if (this.filter !== '' && this.filter?.length <= 2) {
      return;
    }
    this.page = 1;
    this.hasNextPage = true;
    this.service
      .list(this.page, this.favoriteOnly, this.filter)
      .subscribe((thoughts) => {
        this.thoughtList = thoughts;
        if (
          !thoughts?.length ||
          thoughts.length % this.cs.ITENS_PER_PAGE !== 0
        ) {
          this.hasNextPage = false;
        }
      });
  }
}
