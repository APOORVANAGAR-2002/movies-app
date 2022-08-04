import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { Genre } from 'src/app/models/genres';
import { MovieService } from 'src/app/services/movie.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  tvGenres: Genre[] = [];

  constructor(private movieService: MovieService, private tvService: TvService) {}

  ngOnInit(): void {
    this.movieService.getMovieGenres().subscribe((genreData) => {
      this.genres = genreData;
    });
    this.tvService.getTvGenres().subscribe((tvGenreData) => {
      this.tvGenres = tvGenreData;
    });
  }
}
