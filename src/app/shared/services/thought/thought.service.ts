import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thought } from '../../models/Thought.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  constructor(private client: HttpClient, private cs: ConfigService) {}

  private readonly baseURL = 'http://localhost:3000';
  private readonly commonPath = '/thoughts';

  create(thought: Thought): Observable<Thought> {
    const url = this.baseURL + this.commonPath;
    return this.client.post<Thought>(url, thought);
  }

  list(pageNumber: number = 1): Observable<PaginatedResponse> {
    const params = new HttpParams()
      .append('_page', pageNumber)
      .append('_per_page', this.cs.ITENS_PER_PAGE || 6);

    const url = this.baseURL + this.commonPath;
    const response = this.client.get<PaginatedResponse>(url, { params });
    return response;
  }

  listAll(): Observable<Thought[]> {
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

type PaginatedResponse = {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: Thought[]
}