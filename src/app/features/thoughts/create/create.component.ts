import { ConfigService } from './../../../shared/services/config/config.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThoughtService } from '../../../shared/services/thought/thought.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsService } from '../../../shared/services/custom-validators/custom-validators.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateThoughtsComponent implements OnInit {
  constructor(
    private service: ThoughtService,
    private router: Router,
    private cs: ConfigService,
    private formBuilder: FormBuilder,
    private customValidators: CustomValidatorsService
  ) {
    this.templates = this.cs.TEMPLATES;
  }

  readonly templates;
  thoughtForm!: FormGroup;

  ngOnInit(): void {
    const contentValidators = [
      Validators.required,
      Validators.pattern(/(.|\s)*\S(.|\s)*/),
    ];

    const authorValidators = [
      Validators.required,
      Validators.minLength(3),
      this.customValidators.onlyLowerCaseLetters,
    ];

    this.thoughtForm = this.formBuilder.group({
      content: ['', Validators.compose(contentValidators)],
      author: ['', Validators.compose(authorValidators)],
      template: ['template1'],
      favorite: [false]
    });
  }

  get content() {
    return this.thoughtForm.get('content');
  }

  get author() {
    return this.thoughtForm.get('author');
  }

  createThought(): void {
    console.log(this.thoughtForm)
    const thought = this.thoughtForm.value;
    this.service.create(thought).subscribe(() => {
      this.router.navigate(['/' + this.cs.ROUTES.LIST]);
    });
  }

  handleDisabledButtonStyle(): string {
    if (this.thoughtForm.valid) {
      return 'button w-space';
    }
    return 'button w-space disabled';
  }

  cancel(): void {
    this.router.navigate(['/' + this.cs.ROUTES.LIST]);
  }
}
