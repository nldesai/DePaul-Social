import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { FindMeetupComponent } from './find-meetup/find-meetup.component';
import {StudyPageComponent} from "./study-page/study-page.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {TextPageComponent} from "./text-page/text-page.component";
import {CreateGroupComponent} from "./create-group/create-group.component";
import {SearchPartnerComponent} from "./search-partner/search-partner.component";

const routes: Routes = [
  {path: 'landingPage', component: LandingPageComponent},
  {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  {path: 'createMeetup', component: CreateMeetupComponent},
  {path: 'findMeetup', component: FindMeetupComponent},
  {path: 'depaulSocial', component: LandingPageComponent},
  {path: '', redirectTo: '/depaulSocial', pathMatch: 'full'},
  {path: 'study', component: StudyPageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'text', component: TextPageComponent},
  {path: 'creategroup', component: CreateGroupComponent},
  {path: 'searchpartner', component: SearchPartnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
