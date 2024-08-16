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

  create(thought: Thought): Observable<Thought> {
    const url = this.baseURL + this.commonPath;
    return this.client.post<Thought>(url, thought);
  }

  list(): Observable<Thought[]> {
    const url = this.baseURL + this.commonPath;
    return this.client.get<Thought[]>(url);
  }

  get(id: string): Observable<Thought> {
    const url = this.baseURL + this.commonPath + `/${id}`;
    return this.client.get<Thought>(url);
  }

  delete(id: string): Observable<Thought> {
    const url = this.baseURL + this.commonPath + `/${id}`;
    return this.client.delete<Thought>(url);
  }

  update(thought: Thought): Observable<Thought> {
    const url = this.baseURL + this.commonPath + `/${thought.id}`;
    return this.client.put<Thought>(url, thought);
  }
}
