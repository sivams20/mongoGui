import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from 'app/dashboard/movies/movies.component';
//import { AddMovieComponent } from 'app/dashboard/movies/add-movie/add-movie.component';

const routes: Routes = [
  { path: '', component: MoviesComponent }
  //{ path: '/add', component: AddMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
