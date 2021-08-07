import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationServiceService} from './component/location-service.service'
import {HttpClientModule} from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// current location
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCardModule } from '@angular/material/card';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MapComponent } from './component/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatCardModule,
    MatGoogleMapsAutocompleteModule,
    HttpClientModule,

    CommonModule,
    FormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWTLpNCpgZ8M5TAv0ViEDT8LpbODG1bXI',
      // apiKey: 'AIzaSyCR3F6p0cBZEcfs1U2S4u5b0T76o4eDRwU',
      // libraries: ["places"],
   
    }),

    BrowserAnimationsModule
   
  ],
  providers: [LocationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
