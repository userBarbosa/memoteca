import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorsService {
  constructor() {}

  onlyLowerCaseLetters(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value) {
      return null
    }

    const hasLowerCase = /^[a-z]+$/.test(value);

    const invalid = hasLowerCase;

    if (!invalid) {
      return { onlyLowerCaseLetters: true };
    }
    return null;
  }
}
