import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../../../shared/services/thought/thought.service';
import { Thought } from './../../../shared/models/Thought.model';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../shared/services/config/config.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateThoughtsComponent implements OnInit {
  constructor(
    private service: ThoughtService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cs: ConfigService
  ) {
    this.templates = this.cs.TEMPLATES;
  }
  readonly templates;

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

  updateThought(): void {
    if (!this.thought.id || !this.thought.content || !this.thought.template) {
      console.error('missing required information', this.thought);
      return;
    }

    this.service.update(this.thought).subscribe((updated) => {
      console.log('updated:', updated);
      this.router.navigate(['/' + this.cs.ROUTES.LIST]);
    });
  }

  cancel(): void {
    this.router.navigate(['/' + this.cs.ROUTES.LIST]);
  }
}
