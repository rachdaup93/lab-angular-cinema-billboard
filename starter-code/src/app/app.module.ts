import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router'

import {MoviesService} from './services/movies.service'
import { AppComponent } from './app.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';

const routes: Routes = [
  {path: '', component: MyhomeComponent},
  {path: 'movies/:id', component: MyMoviesComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
