import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './app/views/landing/landing.component';
import {FileStytemComponent} from './app/views/file-stytem/file-stytem.component';

export const AppRoutes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'file-system', component: FileStytemComponent},
  {path: '**', redirectTo: 'landing', pathMatch: 'full'},
  ];

@NgModule({
  declarations: [
    LandingComponent,
    FileStytemComponent
  ],
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
