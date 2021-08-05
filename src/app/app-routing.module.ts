import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


const routes: Routes = [
  { path: 'home', component:  LandingpageComponent},
  { pathMatch: 'full', redirectTo: 'home', path: '' },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






