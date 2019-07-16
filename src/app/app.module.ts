import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { MoviesApiService } from './services/movies-api.service';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';
import { MoviesIdComponent } from './movies-id/movies-id.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesGenreComponent } from './movies-genre/movies-genre.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesCategoryComponent,
    MoviesDisplayComponent,
    MoviesIdComponent,
    MoviesSearchComponent,
    MoviesGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    NgxStarsModule,
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
