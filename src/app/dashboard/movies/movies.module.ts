import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

import { MoviesService } from'./movies.service';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
  declarations: [MoviesComponent, AddMovieComponent],
  providers: [MoviesService]
})
export class MoviesModule { }
