import { Component, OnInit } from '@angular/core';
// import { UserLocation } from 'src/app/location';
// import { LocationServiceService } from '../location-service.service';

import { HttpClient } from '@angular/common/http';
import { LocationStorageService } from 'src/app/services/location-storage.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

}

)
export class MapComponent implements OnInit {

  title = 'covidapp';


  constructor(private locationStorage: LocationStorageService) { }


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

  }

}


  // ngOnInit(){
    // this.LocationServiceService.locationRequest();
    // // this.LocationServiceService.location = this.gifs;
    // this.location=this.LocationServiceService.location;
    // console.log(this.location)

  //  





