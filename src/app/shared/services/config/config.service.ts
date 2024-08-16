import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  readonly ROUTES = {
    NEW: 'thoughts/create',
    LIST: 'thoughts/all',
    DELETE: 'thoughts/delete/:id',
    UPDATE: 'thoughts/update/:id',
  };

  readonly TEMPLATES = [
    { id: 'template1', name: 'Modelo 1' },
    { id: 'template2', name: 'Modelo 2' },
    { id: 'template3', name: 'Modelo 3' },
  ];
}
