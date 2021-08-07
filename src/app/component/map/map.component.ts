import { Component, OnInit } from '@angular/core';
import { UserLocation } from 'src/app/location';
import { LocationServiceService } from '../location-service.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
 
}

)
export class MapComponent implements OnInit {

  title = 'covidapp'; 

  

  // ngOnInit(){
    // this.LocationServiceService.locationRequest();
    // // this.LocationServiceService.location = this.gifs;
    // this.location=this.LocationServiceService.location;
    // console.log(this.location)

  //  
 
  ngOnInit(){}

}
