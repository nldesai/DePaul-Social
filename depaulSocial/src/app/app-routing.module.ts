import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent} from "./landing-page/landing-page.component";
import { StudyPageComponent} from "./study-page/study-page.component";
import { MeetupComponent} from "./meetup/meetup.component";

const routes: Routes = [
  {path: 'depaulSocial', component: LandingPageComponent},
  {path: '', redirectTo: '/depaulSocial', pathMatch: 'full'},
  {path: 'study', component: StudyPageComponent},
  {path: 'meetup', component: MeetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
