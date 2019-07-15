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
  page = 1;

  constructor(private route: ActivatedRoute, private api: MoviesApiService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.category = params.category.replace('_', ' ');
      this.page = 1;
      this.api.getCategory(params.category).then(
        (data: any) => {
          /* console.log(data.results); */
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

  nextPage() {
    const cat = this.category.replace(' ', '_');
    this.api.getCategory(cat, ++this.page).then(
      (data: any) => {
        /* console.log(data.results); */
        this.movies = [...this.movies, ...data.results];
      }
    ).catch(error => {
      if (error === 'No valid category') {
        this.router.navigate(['movies/top_rated']);
      } else {
        alert('Try again');
      }
    });
  }

}
