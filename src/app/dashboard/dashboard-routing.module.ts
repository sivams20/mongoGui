import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MoviesComponent } from 'app/dashboard/movies/movies.component';

const routes: Routes = [
    { path: '',  component: DashboardComponent },
    { path: 'movies', loadChildren: 'app/dashboard/movies/movies.module#MoviesModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
