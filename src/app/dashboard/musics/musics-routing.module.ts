import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicsComponent } from 'app/dashboard/musics/musics.component';

const routes: Routes = [
  {path: '', component: MusicsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicsRoutingModule { }
