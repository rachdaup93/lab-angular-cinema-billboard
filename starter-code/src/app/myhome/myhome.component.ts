import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  moviesList: any[] = this.movies.getMovies();
  constructor(
    private movies: MoviesService
  ) { }

  ngOnInit() {
  }

}
