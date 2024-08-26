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
  private readonly thoughtsPath = '/thoughts';
  private readonly commonURL = this.baseURL + this.thoughtsPath;

  getCommonURLWithId(id?: string): string {
    return `${this.commonURL}/${id || ''}`;
  }

  create(thought: Thought): Observable<Thought> {
    return this.client.post<Thought>(this.commonURL, thought);
  }

  list(
    pageNumber: number = 1,
    favoriteOnly: boolean,
    filter?: string
  ): Observable<Thought[]> {
    let params = new HttpParams()
      .append('_page', pageNumber)
      .append('_limit', this.cs.ITENS_PER_PAGE || 6);

    if (favoriteOnly) {
      params = params.append('favorite', 'true');
    }

    if (filter && filter.trim().length > 2) {
      params = params.append('q', filter);
    }

    return this.client.get<Thought[]>(this.commonURL, { params });
  }

  listAll(): Observable<Thought[]> {
    return this.client.get<Thought[]>(this.commonURL);
  }

  filterByProperty(
    pageNumber: number = 1,
    filter: {
      name: 'id' | 'content' | 'author' | 'template' | 'favorite';
      value: string;
    }
  ): Observable<Thought[]> {
    const params = new HttpParams()
      .append('_page', pageNumber)
      .append('_limit', this.cs.ITENS_PER_PAGE || 6)
      .append(filter.name, filter.value);

    return this.client.get<Thought[]>(this.commonURL, { params });
  }

  get(id: string): Observable<Thought> {
    const url = this.getCommonURLWithId(id);
    return this.client.get<Thought>(url);
  }

  delete(id: string): Observable<Thought> {
    const url = this.getCommonURLWithId(id);
    return this.client.delete<Thought>(url);
  }

  update(thought: Thought): Observable<Thought> {
    const url = this.getCommonURLWithId(thought.id);
    return this.client.put<Thought>(url, thought);
  }

  updateFavorite(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite;
    const url = this.getCommonURLWithId(thought.id);
    return this.client.patch<Thought>(url, thought);
  }
}
