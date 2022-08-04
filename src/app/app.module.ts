import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { TvItemComponent } from './components/tv-item/tv-item.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MovieComponent } from './pages/movie/movie.component';
import { MatTabsModule } from '@angular/material/tabs';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { GenresComponent } from './pages/genres/genres.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TvsComponent } from './pages/tvs/tvs.component';
import { TvComponent } from './pages/tv/tv.component';
import { TvSliderComponent } from './components/tv-slider/tv-slider.component';
// import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    TvItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    GenresComponent,
    TvsComponent,
    TvComponent,
    TvSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
