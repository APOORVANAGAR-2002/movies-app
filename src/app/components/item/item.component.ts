import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TV } from 'src/app/models/tv';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
