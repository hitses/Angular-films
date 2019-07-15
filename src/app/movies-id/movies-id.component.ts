import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesIdService } from '../services/movies-id.service';

@Component({
  selector: 'app-movies-id',
  templateUrl: './movies-id.component.html',
  styleUrls: ['./movies-id.component.scss']
})
export class MoviesIdComponent implements OnInit {
  movieData: object;
  similarMovies: object[] = [];
  apiKey = 'a94db6e1acf929e6c3d28e88dc1bb386';
  page = 1;

  constructor(private route: ActivatedRoute, private api: MoviesIdService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.api.getId(params.id).then(
        (data: any) => {
          /* console.log(data.results); */
          this.movieData = data.results;
        }
      ).catch(error => {
        if (error === 'No valid ID') {
          this.router.navigate(['movies/top_rated']);
        } else {
          alert('Try again');
        }
      });
      this.api.similarMovies(params.id).subscribe((res: any) => {
        this.similarMovies = res.result;
      });
    });
  }

}
