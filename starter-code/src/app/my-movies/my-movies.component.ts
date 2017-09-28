import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../services/movies.service';
@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  movieInfo: any = {};
  constructor(
    private movie: MoviesService,
    private activated: ActivatedRoute
  ) { }

  ngOnInit() {     // req.params
      this.activated.params.subscribe(
        (myParams) => {
                    // { path: 'partners/:thePartnerId'
            const theId = Number(myParams.id);

            this.movieInfo = this.movie.getMovie(theId);
        }
      );
  }
}
