import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupComponent } from './meetup/meetup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterTwitterFeedComponent } from './footer-twitter-feed/footer-twitter-feed.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudyPageComponent } from './study-page/study-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TextPageComponent } from './text-page/text-page.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SearchPartnerComponent } from './search-partner/search-partner.component';
import { TextbookBuyComponent } from './textbook-buy/textbook-buy.component';
import { TextbookSellComponent } from './textbook-sell/textbook-sell.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { FindMeetupComponent } from './find-meetup/find-meetup.component';
import { JoinStudyComponent} from './join-study/join-study.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from  './material.module';
import { RouterModule, Routes } from '@angular/router';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MeetupComponent,
    NavigationComponent,
    FooterTwitterFeedComponent,
    MeetupComponent,
    LandingPageComponent,
    StudyPageComponent,
    HomepageComponent,
    TextPageComponent,
    CreateGroupComponent,
    SearchPartnerComponent,
    TextbookBuyComponent,
    TextbookSellComponent,
    AboutUsComponent,
    TeamCardComponent,
    ProfileComponent,
    CreateMeetupComponent,
    FindMeetupComponent,
    JoinStudyComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
       
     
    ]),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
