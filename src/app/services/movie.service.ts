import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDTO } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '34bf65bb993fd7718eb2a2a09423968b';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular', count: number=12) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchMovies(page: number) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );

  }
}
