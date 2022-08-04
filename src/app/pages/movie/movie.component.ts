import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie, MovieCredits, MovieDTO, MovieImage, MovieVideo } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImage | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieService.getMovie(params.id).subscribe((movieData) => {
        this.movie = movieData;
        this.getMovieVideos(params.id)
        this.getMovieImages(params.id)
        this.getMovieCredits(params.id)
        this.getSimilarMovies(params.id)
      })
    })
  }
  getMovieVideos(id: number) {
    this.movieService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    })
  }

  getMovieImages(id: number) {
    this.movieService.getMovieImages(id).subscribe((movieImageData) => {
      this.movieImages = movieImageData;
    })
  }

  getMovieCredits(id: number) {
    this.movieService.getMovieCredits(id).subscribe((movieCreditData) => {
      this.movieCredits = movieCreditData;
      // console.log(this.movieCredits);
      
    })
  }

  getSimilarMovies(id: number) {
    this.movieService.getSimilarMovies(id).subscribe((similarMovieData) => {
      console.log("similar", similarMovieData);
      this.similarMovies = similarMovieData;     
   })
  }

}
