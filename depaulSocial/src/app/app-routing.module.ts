import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { TextbookBuyComponent } from "./textbook-buy/textbook-buy.component";
import { TextbookSellComponent} from "./textbook-sell/textbook-sell.component";

const routes: Routes = [
  {path: 'landingPage', component: LandingPageComponent},
  {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  { path: 'TextbookSellComponent', component: TextbookSellComponent },
  { path: 'TextbookBuyComponent', component: TextbookBuyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
