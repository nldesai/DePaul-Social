import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import  { NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    SearchPartnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
