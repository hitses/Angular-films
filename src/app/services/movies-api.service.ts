import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  baseUrlApi = 'https://api.themoviedb.org/3';
  apiKey = 'a94db6e1acf929e6c3d28e88dc1bb386';
  languaje = '&language=es-ES';

  constructor(private http: HttpClient) { }

  getCategory(cat: string, page: number = 1) {
    const validCategories = ['top_rated', 'upcoming', 'popular'];

    if (validCategories.includes(cat)) {
      return this.http.get(`${this.baseUrlApi}/movie/${cat}?api_key=${this.apiKey}&page=${page}${this.languaje}`).toPromise();
    } else {
      return Promise.reject('No valid category');
    }
  }

  searchMovies(query: string) {
    return this.http.get(`${this.baseUrlApi}/movie/?api_key=${this.apiKey}&query=${query}${this.languaje}`);
  }
}
