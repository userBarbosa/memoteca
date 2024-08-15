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
  constructor(private service: ThoughtService, private router: Router) {}

  thought: Thought = {
    // id
    author: '',
    content: '',
    template: '',
  };
  templates = [
    { id: 'template1', name: 'Modelo 1' },
    { id: 'template2', name: 'Modelo 2' },
    { id: 'template3', name: 'Modelo 3' },
  ];

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
      this.router.navigate(['/thoughts/all']);
    });
  }

  returnToList(): void {
    this.router.navigate(['/thoughts/all']);
  }
}
