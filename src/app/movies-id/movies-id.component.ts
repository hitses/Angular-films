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
  loading = true;
  relatedMovies: object[] = [];
  apiKey = 'a94db6e1acf929e6c3d28e88dc1bb386';
  page = 1;

  constructor(private route: ActivatedRoute, private api: MoviesIdService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loading = true;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.api.getId(params.id).then(
        (data: any) => {
          this.loading = false;
          this.movieData = data;
        }
      ).catch(error => {
        if (error === 'No valid ID') {
          this.router.navigate(['movies/top_rated']);
        } else {
          alert('Try again');
        }
      });
      this.api.similarMovies(params.id).subscribe((res: any) => {
        console.log(res);
        this.relatedMovies = res.results;
      });
    });
  }
}
