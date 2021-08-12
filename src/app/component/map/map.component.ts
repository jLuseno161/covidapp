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
    this.storedlocation = localStorage.getItem("address");
    this.storedcoord = localStorage.getItem("coordinates");
  }

  submitInput(): void {
    this.storedlocation = localStorage.getItem("address");
    this.storedcoord = localStorage.getItem("coordinates");
    this.storedcity = localStorage.getItem("locality")
    console.log(this.storedlocation)
    this.user_id = localStorage.getItem('user_id')
    let location = this.storedlocation + ',' + this.storedcity
    let user = this.user_id
    console.log(user)
    let { name, symptoms } = this.newInput;
    this.patientInput = { user, name, location, symptoms }
    console.log(this.patientInput)

    this.resultsService.addPatient(user, name, location, symptoms).subscribe(
      data => {
        console.log(data);
      },
    );
    alert('Your session has been updated successfully. Kindly wait the doctors feedback')
    this.router.navigate(['patient']);
  }
}





