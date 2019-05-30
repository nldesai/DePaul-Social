import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
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
import { TextbookSwapComponent } from './textbook-swap/textbook-swap.component';
import { TwitterService} from './services/twitter.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LocationBarComponent } from './location-bar/location-bar.component';
import { DiscountPageComponent } from './discount-page/discount-page.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { MeetupsService} from './services/meetups.service';
import { TextBooksService } from './services/textbooks.service';
import { StudyGroupService } from './services/studygroup.service';

@NgModule({
  declarations: [
    AppComponent,
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
    TextbookSwapComponent,
    RegisterComponent,
    LoginComponent,
    LocationBarComponent,
    DiscountPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],

  providers: [TwitterService, MeetupsService, TextBooksService,StudyGroupService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
