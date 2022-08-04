import { Component, OnInit , Input} from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { TV } from 'src/app/models/tv';

@Component({
  selector: 'app-tv-slider',
  templateUrl: './tv-slider.component.html',
  styleUrls: ['./tv-slider.component.scss']
})
export class TvSliderComponent implements OnInit {

  @Input() items: TV[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;
  imageSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
     if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }

}
