import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesIdComponent } from './movies-id/movies-id.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

const routes: Routes = [
  {path: 'movies/:category', component: MoviesCategoryComponent},
  {path: 'movies/:id', component: MoviesIdComponent},
  {path: 'search/:query', component: MoviesSearchComponent},
  {path: 'search', component: MoviesSearchComponent},
  {path: '**', redirectTo: 'movies/populares'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
