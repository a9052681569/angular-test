import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CountriesComponent } from './countries/countries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPageInfoComponent } from './user-page/user-page-info/user-page-info.component';
import { UserPageStateComponent } from './user-page/user-page-state/user-page-state.component';
import { NamePipe } from './name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    CountriesComponent,
    NotFoundComponent,
    HomeComponent,
    UserPageComponent,
    UserPageInfoComponent,
    UserPageStateComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
