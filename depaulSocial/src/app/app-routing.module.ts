import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {StudyPageComponent} from "./study-page/study-page.component";

const routes: Routes = [
  {path: 'landingPage', component: LandingPageComponent},
  {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  {path: 'study', component: StudyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
