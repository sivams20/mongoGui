import { Component, OnInit } from '@angular/core';

import { MoviesService } from './movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : string;
  constructor(private moviesService : MoviesService, private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.moviesService.getMovies().subscribe((data) =>{
      console.log(data);
      this.movies = data;
    });
  }

  addMovie(){
    this.router.navigate(['dashboard/movies/add']);
  }

}
