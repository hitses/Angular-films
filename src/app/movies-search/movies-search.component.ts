import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {
  foundMovies: object[] = [];
  query = '';

  constructor(private api: MoviesApiService) { }

  ngOnInit() {
  }

  search() {
    if (this.query.trim()) {
      this.api.searchMovies(this.query).subscribe((res: any) => {
        this.foundMovies = res.results;
      });
    } else {
      this.foundMovies = [];
    }
  }

}
