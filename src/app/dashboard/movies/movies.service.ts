import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from './models/movie';

@Injectable()
export class MoviesService {

  constructor(private httpClient : HttpClient) { }

    getMovies(): Observable<Movie>{
        return this.httpClient.get<Movie>('https://jsonplaceholder.typicode.com/albums');
    }

}
