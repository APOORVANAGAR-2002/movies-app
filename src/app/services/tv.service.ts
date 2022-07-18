import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvDTO } from '../models/tv';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TvService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  api_key: string = '34bf65bb993fd7718eb2a2a09423968b';

  constructor(private http: HttpClient) { }

  getTv(type: string = 'popular', count: number = 12) {
    return this.http.get<TvDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.api_key}`)
      .pipe(switchMap(res => {
      return of(res.results.slice(0, count))
    }))
  }
}
