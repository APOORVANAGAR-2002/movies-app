import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { TV, TvDTO } from 'src/app/models/tv';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.scss']
})
export class TvsComponent implements OnInit {
  tvShows: TV[] = [];
  searchValue: string | null = null;
  tvGenreId: string | null = null;

  constructor(private tvService: TvService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({tvGenreID}) => {
      console.log(tvGenreID);
      if (tvGenreID) {
        this.tvGenreId = tvGenreID;
        this.getTvsByGenre(tvGenreID, 1);
      } else {
        this.getPagedTvShows(1);
      }
    });
  }

  // getTvShows() {
  //   this.tvService.getTvShows('popular', 20).subscribe((tvShowData) => {
  //     this.tvShows = tvShowData;
  //     console.log(this.searchValue);
  //   });

  // }
  getTvsByGenre(genreId: string, page: number) {
    this.tvService.getTvsByGenres(genreId, page).subscribe((showData) => {
      this.tvShows = showData;
    });
  }

  getPagedTvShows(page: number, searchValue?: string) {
    this.tvService.searchTvShows(page, searchValue).subscribe((showData) => {
      this.tvShows = showData;
    });
  }

  paginate(event: any) {
    const pageNumber = event.pageIndex + 1;
    if (this.tvGenreId) {
      this.getTvsByGenre(this.tvGenreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedTvShows(pageNumber, this.searchValue);
      } else {
        this.getPagedTvShows(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedTvShows(1, this.searchValue);
    }
  }
}
