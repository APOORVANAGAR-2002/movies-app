import { Component, Input } from '@angular/core';
import { TV } from 'src/app/models/tv';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() items: Movie[] = [];
  @Input() title: string = '';

  @Input() tvItems: TV[] = [];
  @Input() tvTitle: string = '';

  ngOnInit(): void {
  }
}
