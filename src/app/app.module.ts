import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { TracklistComponent } from './tracklist/tracklist.component';
import { ListingModule } from 'listing-angular7';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    LocationComponent,
    HomeComponent,
    TracklistComponent
  ],
  imports: [
    DemoMaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvzWjkeGYWlGTo-EUbqXFElWZ0uEw5yfc',
      // libraries: ['places']
    }),
    CommonModule,
    BrowserAnimationsModule,
    ListingModule
  ],
  providers: [CookieService, ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
