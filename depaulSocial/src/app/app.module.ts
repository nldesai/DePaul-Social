import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupComponent } from './meetup/meetup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterTwitterFeedComponent } from './footer-twitter-feed/footer-twitter-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupComponent,
    NavigationComponent,
    FooterTwitterFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
