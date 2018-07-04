import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesService {

  constructor(private httpClient : HttpClient) { }


    getMovies(): Observable<any>{
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }

}
