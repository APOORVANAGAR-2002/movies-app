import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TV } from 'src/app/models/tv';
import { TvService } from 'src/app/services/tv.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent implements OnInit {
  @Input() tvData: TV | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
