import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TV, TvDTO, TvImage, TvVideo, TvVideoDTO } from '../models/tv';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDTO } from '../models/genres';
@Injectable({
  providedIn: 'root'
})
export class TvService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  api_key: string = '34bf65bb993fd7718eb2a2a09423968b';

  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'popular', count: number = 12) {
    return this.http.get<TvDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.api_key}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getTv(tvId: string) {
    return this.http.get<TV>(`${this.baseUrl}/tv/${tvId}?api_key=${this.api_key}`)
  }

  getTvsByGenres(tvGenreId: string, page: number) {
    return this.http
      .get<TvDTO>(
        `${this.baseUrl}/discover/tv?with_genres=${tvGenreId}&page=${page}&api_key=${this.api_key}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  searchTvShows(pageNumber: number, searchKeyword?: string) {
    const uri = searchKeyword ? 'search/tv' : 'tv/popular';
    return this.http
      .get<TvDTO>(
        `${this.baseUrl}/${uri}?query=${searchKeyword}&page=${pageNumber}&api_key=${this.api_key}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvGenres() {
    return this.http.get<GenresDTO>(`${this.baseUrl}/genre/tv/list?api_key=${this.api_key}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getTvVideos(tvId: string) {
    return this.http
      .get<TvVideoDTO>(`${this.baseUrl}/tv/${tvId}/videos?api_key=${this.api_key}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvImages(id: string) {
    return this.http.get<TvImage>(`${this.baseUrl}/tv/${id}/images?api_key=${this.api_key}`);
  }

  getSimilarShows(id: string) {
    return this.http.get<TvDTO>(`${this.baseUrl}/tv/${id}/similar?api_key=${this.api_key}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, 12));
      })
    )
  }
}
