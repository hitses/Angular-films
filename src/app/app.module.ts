import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { HttpClientModule } from '@angular/common/http';

import { MoviesApiService } from './services/movies-api.service';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoviesIdComponent } from './movies-id/movies-id.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesCategoryComponent,
    MoviesDisplayComponent,
    MoviesIdComponent,
    MoviesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
