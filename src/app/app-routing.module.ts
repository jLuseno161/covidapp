import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { DocDashComponent } from './component/doc-dash/doc-dash.component';
import { PatientDashComponent } from './component/patient-dash/patient-dash.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: LandingpageComponent },
  { path: 'doctor', component: DocDashComponent },
  { path: 'patient', component: PatientDashComponent },
  // { pathMatch: 'full', redirectTo: 'home', path: '' },
  { path: '**', component: PageNotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






