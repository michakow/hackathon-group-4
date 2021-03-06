import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { EventTileComponent } from './event-tile/event-tile.component';
import { EventListComponent } from './event-list/event-list.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoginComponent } from './login/login.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEventComponent } from './add-event/add-event.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoutComponent,
    HeaderComponent,
    LogoComponent,
    MainComponent,
    EventTileComponent,
    EventListComponent,
    EventDetailsComponent,
    LoginComponent,
    DateTransformPipe,
    LoaderComponent,
    NotFoundComponent,
    AddEventComponent,

  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
