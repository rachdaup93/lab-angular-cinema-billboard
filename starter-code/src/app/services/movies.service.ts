import { Injectable } from '@angular/core';
import SampleMovies from '../../sample-movies'
@Injectable()
export class MoviesService {
  movies: any[] = SampleMovies;
  constructor() { }
  getMovies(){
    return this.movies;
  }
  getMovie(id){
    let foundMovie;

    this.movies.forEach((oneMovie) => {
    if (oneMovie.id === id) {
        foundMovie = oneMovie;
    }
  });

return foundMovie;
  }
}
