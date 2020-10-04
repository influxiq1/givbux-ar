import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { Test1Component } from './test1/test1.component';
import { TracklistComponent } from './tracklist/tracklist.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'track/:id', component: Test1Component },
  {path:'location', component:LocationComponent},
  {path:'track-list', component:TracklistComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
