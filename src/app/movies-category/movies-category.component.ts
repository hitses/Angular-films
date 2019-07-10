import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss']
})
export class MoviesCategoryComponent implements OnInit {
  category: string;
  movies: object[] = [];
  apiKey = 'a94db6e1acf929e6c3d28e88dc1bb386';

  constructor(private route: ActivatedRoute, private api: MoviesApiService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params.category.replace('_', ' ');
      this.api.getCategory(params.category).then(
        (data: any) => {
          console.log(data.results);
          this.movies = data.results;
        }
      ).catch(error => {
        if (error === 'No valid category') {
          this.router.navigate(['movies/top_rated']);
        } else {
          alert('Try again');
        }
      });
    });
  }

}
