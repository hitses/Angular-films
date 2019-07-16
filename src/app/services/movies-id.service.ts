import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesIdService {
  baseUrlApi = 'https://api.themoviedb.org/3';
  apiKey = 'a94db6e1acf929e6c3d28e88dc1bb386';
  languaje = '&language=es-ES';

  constructor(private http: HttpClient) { }

  getId(id: number) {
    if (id) {
      return this.http.get(`${this.baseUrlApi}/movie/${id}?api_key=${this.apiKey}${this.languaje}`).toPromise();
    } else {
      return Promise.reject('No valid ID');
    }
  }

  similarMovies(id, page: number = 1) {
    return this.http.get(`${this.baseUrlApi}/movie/${id}/similar?api_key=${this.apiKey}&page=${page}${this.languaje}`);
  }
}
