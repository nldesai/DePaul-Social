import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {StudyPageComponent} from "./study-page/study-page.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {TextPageComponent} from "./text-page/text-page.component";

const routes: Routes = [
  {path: 'depaulSocial', component: LandingPageComponent},
  {path: '', redirectTo: '/depaulSocial', pathMatch: 'full'},
  {path: 'study', component: StudyPageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'text', component: TextPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
