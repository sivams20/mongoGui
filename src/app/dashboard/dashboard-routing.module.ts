import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

const routes: Routes = [
    { path: '',  component: DashboardComponent, 
    children:[
        { path: 'movies', loadChildren: 'app/dashboard/movies/movies.module#MoviesModule' },
        { path: 'events', loadChildren: 'app/dashboard/events/events.module#EventsModule' },
        { path: 'musics', loadChildren: 'app/dashboard/musics/musics.module#MusicsModule' }
    ]
},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
