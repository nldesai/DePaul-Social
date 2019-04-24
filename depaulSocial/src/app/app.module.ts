import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { JoinStudyComponent } from './join-study/join-study.component';
=======
import { MeetupComponent } from './meetup/meetup.component';
>>>>>>> bc9abd8b868c9593d08d2fa44e367e5fb4e69806

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    JoinStudyComponent
=======
    MeetupComponent
>>>>>>> bc9abd8b868c9593d08d2fa44e367e5fb4e69806
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
