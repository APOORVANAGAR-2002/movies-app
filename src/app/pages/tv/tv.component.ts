import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { TV, TvImage, TvVideo, TvVideoDTO } from 'src/app/models/tv';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tv: TV | null = null;
  imagesSizes = IMAGES_SIZES;
  tvVideo: TvVideo[] = []; 
  tvImage: TvImage | null = null;
  similarShows: TV[] = [];
  imageSizes = IMAGES_SIZES;

  constructor(private tvService: TvService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // console.log(params.tvId);
      this.getTv(params.tvId);
      this.getVideos(params.tvId);
      this.getImages(params.tvId);
      this.getSimilarShows(params.tvId);
    })
  }

  getTv(tvId: string) {
    this.tvService.getTv(tvId).subscribe((tvShowData) => {
      this.tv = tvShowData;
    })
  }

  getVideos(tvId: string) {
    this.tvService.getTvVideos(tvId).subscribe((tvVideoData) => {
      this.tvVideo = tvVideoData;
      console.log("Video",this.tvVideo);
    })
  }

  getImages(tvId: string) {
    this.tvService.getTvImages(tvId).subscribe((tvImage) => {
      this.tvImage = tvImage;
    })
  }

  getSimilarShows(tvId: string) {
    this.tvService.getSimilarShows(tvId).subscribe((similarShowData) => {
      this.similarShows = similarShowData;
    })
  }

}
