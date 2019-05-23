import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetupComponent} from './meetup/meetup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TextbookBuyComponent } from './textbook-buy/textbook-buy.component';
import { TextbookSellComponent} from './textbook-sell/textbook-sell.component';
import { AboutUsComponent} from './about-us/about-us.component';
import { ProfileComponent} from './profile/profile.component';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { FindMeetupComponent } from './find-meetup/find-meetup.component';
import { StudyPageComponent} from './study-page/study-page.component';
import { HomepageComponent} from './homepage/homepage.component';
import { TextPageComponent} from './text-page/text-page.component';
import { CreateGroupComponent} from './create-group/create-group.component';
import { SearchPartnerComponent} from './search-partner/search-partner.component';
import { JoinStudyComponent} from './join-study/join-study.component';
import { TextbookSwapComponent } from './textbook-swap/textbook-swap.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  {path: 'landingPage', component: LandingPageComponent},
  {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  {path: 'booksell', component: TextbookSellComponent },
  {path: 'bookbuy', component: TextbookBuyComponent },
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'createMeetup', component: CreateMeetupComponent},
  {path: 'findMeetup', component: FindMeetupComponent},
  {path: 'depaulSocial', component: LandingPageComponent},
<<<<<<< HEAD
  {
    path: 'study',
    component: StudyPageComponent,
    children: [

      {path: 'join-study-group', component: JoinStudyComponent},
      {path: 'create-group', component: CreateGroupComponent},
      {path: 'searchpartner', component: SearchPartnerComponent}
    ]
  },
=======
  {path: 'study', component: StudyPageComponent},
>>>>>>> 1dd87859f3c8da998ec8e4040775dee72a7c633a
  {path: 'meetup', component: MeetupComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'text', component: TextPageComponent},
  {path: 'create-meetup', component: CreateMeetupComponent},
  {path: 'find-meetup', component: FindMeetupComponent},
  {path: 'bookswap', component: TextbookSwapComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngularFontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
