import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
//import { AddMovieComponent } from 'app/dashboard/movies/add-movie/add-movie.component';

const routes: Routes = [
    { path: '',  component: DashboardComponent, 
    children:[
        { path: 'movies/list', loadChildren: 'app/dashboard/movies/movies.module#MoviesModule' },
        { path: 'events/list', loadChildren: 'app/dashboard/events/events.module#EventsModule' },
        { path: 'musics/list', loadChildren: 'app/dashboard/musics/musics.module#MusicsModule' }
        //{ path: 'movies/add', component: AddMovieComponent }
    ]
},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
