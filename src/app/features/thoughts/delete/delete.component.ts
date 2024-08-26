import { ConfigService } from './../../../shared/services/config/config.service';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../../shared/services/thought/thought.service';
import { Thought } from '../../../shared/models/Thought.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteThoughtsComponent implements OnInit {
  constructor(
    private service: ThoughtService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cs: ConfigService
  ) {}

  thought: Thought = {
    id: '',
    author: '',
    content: '',
    template: '',
    favorite: false
  };

  ngOnInit(): void {
    const propertyName = 'id';
    if (!this.activatedRoute.snapshot.paramMap.has(propertyName)) {
      console.error(`URL doesn't have a ${propertyName}`);
      this.cancel();
      return;
    }
    const property = this.activatedRoute.snapshot.paramMap.get(propertyName);

    // property! -> "postfix bang"
    this.service.get(property!).subscribe((thought) => {
      this.thought = thought;
    });
  }

  deleteThought(): void {
    if (!this.thought.id) {
      console.error('missing an id');
      return;
    }

    this.service.delete(this.thought.id).subscribe((deleted) => {
      console.log('deleted:', deleted);
      this.router.navigate(['/' + this.cs.ROUTES.LIST]);
    });
  }

  cancel(): void {
    this.router.navigate(['/' + this.cs.ROUTES.LIST]);
  }
}
