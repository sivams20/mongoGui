import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesService {

    baseUrl:string = "http://localhost:3000";
  constructor(private httpClient : HttpClient) { }


    getMovies(): Observable<any>{
        return this.httpClient.get(this.baseUrl + '/products');
    }

}
