import { Component, OnInit } from '@angular/core';
// import { UserLocation } from 'src/app/location';
// import { LocationServiceService } from '../location-service.service';

import { HttpClient } from '@angular/common/http';
import { LocationStorageService } from 'src/app/services/location-storage.service';
import { PatientInputService } from 'src/app/patient-input.service';
import { Router } from '@angular/router';

declare var initMap: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

}

)
export class MapComponent implements OnInit {

  title = 'covidapp';

  constructor(private locationStorage: LocationStorageService, private router: Router, private resultsService: PatientInputService) { }
  //patient formatted_address
  storedlocation: any;
  storedcoord: any;
  storedcity: any;
  newInput: any = {
    // user: null,
    name: null,
    symptoms: null,
    // location: null,
  };
  patientInput: any = {
    user: null,
    name: null,
    symptoms: null,
    location: null,
  };
  user_id: any;
  username: any;

  // map
  public address!: any;
  public coordinates!: any;
  public queryResult!: string;

  public location = { address: this.address, coordinates: this.coordinates }

  public addLocation() {
    this.location.address = this.address
    this.location.coordinates = this.coordinates

    this.locationStorage.setItem(this.address, JSON.stringify(this.location))
  }

  public getLocation(nameToRemove: string) {
    this.queryResult = this.locationStorage.getItem(nameToRemove);
  }

  public reset() {
    this.locationStorage.clear();
  }
  ngOnInit() {
    new initMap();
    this.user_id = localStorage.getItem('user_id')
    this.username = localStorage.getItem('username')
    this.storedlocation = localStorage.getItem("address");
    this.storedcoord = localStorage.getItem("coordinates");
    
  }

  submitInput(): void {
    this.storedlocation = localStorage.getItem("address");
    this.storedcoord = localStorage.getItem("coordinates");
    this.storedcity = localStorage.getItem("locality")
    this.user_id = localStorage.getItem('user_id')
    this.username = localStorage.getItem('username')
    let location = this.storedlocation + ',' + this.storedcoord
    let user = this.user_id
    let name = this.username
    
    let {symptoms } = this.newInput;
    this.patientInput = { user, name, location, symptoms }
    console.log(this.patientInput)

    this.resultsService.addPatient(user = this.user_id, name = this.username, location =this.storedlocation + ',' + this.storedcoord, symptoms).subscribe(
      data => {
        console.log(data);
      },
    );
    alert('Your session has been updated successfully. Kindly wait the doctors feedback')
    this.router.navigate(['patient']);
  }
}





