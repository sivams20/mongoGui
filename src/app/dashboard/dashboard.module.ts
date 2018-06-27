import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from 'app/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
