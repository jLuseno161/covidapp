import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TracingComponent } from './tracing/tracing.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { DoctorInputComponent } from './doctor-input/doctor-input.component';
import { PatientInputFormComponent } from './patient-input-form/patient-input-form.component';
import { DoctorInputFormComponent } from './doctor-input-form/doctor-input-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TracingComponent,
    ProfileComponent,
    ResultsComponent,
    DoctorInputComponent,
    PatientInputFormComponent,
    DoctorInputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
