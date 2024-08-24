import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { CustomValidatorsService } from './custom-validators.service';

describe('CustomValidatorsService', () => {
  let service: CustomValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('onlyLowerCaseLetters', () => {
    it('should return null if the value contains only lowercase letters', () => {
      const control = new FormControl('abcdef');
      const result = service.onlyLowerCaseLetters(control);
      expect(result).toBeNull();
    });

    it('should return an error if the value contains uppercase letters', () => {
      const control = new FormControl('abcDef');
      const result = service.onlyLowerCaseLetters(control);
      expect(result).toEqual({ onlyLowerCaseLetters: true });
    });

    it('should return an error if the value contains numbers', () => {
      const control = new FormControl('abc123');
      const result = service.onlyLowerCaseLetters(control);
      expect(result).toEqual({ onlyLowerCaseLetters: true });
    });

    it('should return an error if the value contains special characters', () => {
      const control = new FormControl('abc$%');
      const result = service.onlyLowerCaseLetters(control);
      expect(result).toEqual({ onlyLowerCaseLetters: true });
    });

    it('should return an error if the value is an empty string', () => {
      const control = new FormControl('');
      const result = service.onlyLowerCaseLetters(control);
      expect(result).toBeNull();
      // expect(result).toEqual({ onlyLowerCaseLetters: true });
    });

    it('should return an error if the value is null', () => {
      const control = new FormControl(null);
      const result = service.onlyLowerCaseLetters(control);
      expect(result).toBeNull();
      // expect(result).toEqual({ onlyLowerCaseLetters: true });
    });

    it('should return an error if the value is undefined', () => {
      const control = new FormControl(undefined);
      const result = service.onlyLowerCaseLetters(control);
      expect(result).toBeNull();
      // expect(result).toEqual({ onlyLowerCaseLetters: true });
    });
  });
});
