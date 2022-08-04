import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDTO, MovieImage, MovieVideoDTO } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDTO } from '../models/genres';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '34bf65bb993fd7718eb2a2a09423968b';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular', count: number = 12) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getMovie(movieId: number) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie': 'movie/popular'
    return this.http
      .get<MovieDTO>(`${this.baseUrl}/${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieVideos(movieId: number) {
    return this.http
      .get<MovieVideoDTO>(`${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieGenres() {
    return this.http
      .get<GenresDTO>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieImages(movieId: number) {
    return this.http.get<MovieImage>(
      `${this.baseUrl}/movie/${movieId}/images?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(movieId: number) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }

  getSimilarMovies(movieId: number) {
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/${movieId}/similar?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0,12))
      })
    );
  }
}
