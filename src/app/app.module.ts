import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CountriesComponent } from './countries/countries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserPageModule } from './user-page/user-page.module';
import { NamePipe } from './name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    CountriesComponent,
    NotFoundComponent,
    HomeComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
