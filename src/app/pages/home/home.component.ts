import { Component, OnInit } from '@angular/core';
import { Movie, MovieDTO } from 'src/app/models/movie';
import { TV } from 'src/app/models/tv';
import { MovieService } from 'src/app/services/movie.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  popularTV: TV[] = [];
  topRatedTV: TV[] = [];

  // topRated: string = 'Top Rated Movies';
  // upcoming: string = 'Upcoming Movies'

 
  
  constructor(private moviesService: MovieService, private tvService: TvService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
   
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });

    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });

    this.tvService.getTv('popular').subscribe((shows) => {
      this.popularTV = shows;  
    })

    this.tvService.getTv('top_rated').subscribe((shows) => {
      this.topRatedTV = shows;
    })

  }
}
