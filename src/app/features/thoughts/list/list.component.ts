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

  ngOnInit(): void {
    this.service.list(this.page).subscribe((thoughts) => {
      this.thoughtList = thoughts?.data;
      if (!thoughts.next) {
        this.hasNextPage = false;
      }
    });
  }

  loadNextPage(): void {
    this.service.list(++this.page).subscribe((thoughts) => {
      this.thoughtList.push(...thoughts.data);
      if (!thoughts.next) {
        this.hasNextPage = false;
      }
    });
  }
}
