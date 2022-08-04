import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {    
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovie(1);
      }
    });
  }

  getPagedMovie(page: number, searchKeyword?: string) {
    this.movieService.searchMovies(page, searchKeyword).subscribe((movie) => {
      this.movies = movie;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.movieService.getMoviesByGenre(genreId, page).subscribe((movieByGenreData) => {
      this.movies = movieByGenreData;
    });
  }


  paginate(event: any) {
    const pageNumber = event.pageIndex + 1;

    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedMovie(pageNumber, this.searchValue);
      } else {
        this.getPagedMovie(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedMovie(1, this.searchValue);
    }
  }
}
