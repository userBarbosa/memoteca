import { ConfigService } from './../../../shared/services/config/config.service';
import { Component } from '@angular/core';
import { Thought } from '../../../shared/models/Thought.model';
import { Router } from '@angular/router';
import { ThoughtService } from '../../../shared/services/thought/thought.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateThoughtsComponent {
  constructor(
    private service: ThoughtService,
    private router: Router,
    private cs: ConfigService
  ) {
    this.templates = this.cs.TEMPLATES;
  }

  readonly templates;

  thought: Thought = {
    // id: '',
    author: '',
    content: '',
    template: '',
  };

  createThought(): void {
    if (!this.thought.content || !this.thought.template) {
      function stringStatus(value: string): string {
        return value ? 'preenchido' : 'a preencher';
      }
      alert(
        'Preencha todos os campos obrigatórios\n\n' +
          `Conteudo: ${stringStatus(this.thought.content)}\n` +
          `Modelo: ${stringStatus(this.thought.template)}`
      );
      return;
    }
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/' + this.cs.ROUTES.LIST]);
    });
  }

  cancel(): void {
    this.router.navigate(['/' + this.cs.ROUTES.LIST]);
  }
}
