import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thought } from '../../models/Thought.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ThoughtService {
  constructor(private client: HttpClient) {}

  private readonly baseURL = 'http://localhost:3000';
  private readonly commonPath = '/thoughts';

  list(): Observable<Thought[]> {
    const url = this.baseURL + this.commonPath;
    return this.client.get<Thought[]>(url);
  }

  create(thought: Thought): Observable<Thought> {
    const url = this.baseURL + this.commonPath;
    return this.client.post<Thought>(url, thought);
  }
}
