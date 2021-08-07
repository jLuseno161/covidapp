import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLocation } from '../location'


@Injectable({
  providedIn: 'root'
})

export class LocationServiceService {
  location!: UserLocation;



  constructor(private http: HttpClient) {
    this.location = new UserLocation('', '');
  }

  // locationRequest() {
  //   interface ApiResponse {
  //     name: string;
  //     user: string;

  //   }

  //   let promise = new Promise<ApiResponse | void>((resolve, reject) => {
  //     this.http.get<ApiResponse>(environment.locationUrl).toPromise().then(response => {
  //       this.location.name = response.name
  //       this.location.user = response.user

  //       resolve()
  //     },
  //       error => {
  //         this.location.name = "Here"
  //         this.location.user = "my name"

  //         reject(error)
  //       })
  //   })
  //   return promise
  // }


  locationRequest(): Observable<any> {
    interface ApiResponse {
      name: string;
      user: string;

    }

    return this.http.get<ApiResponse>(environment.locationUrl, {
      headers: {
        "Content-Type": "application/json",
      }
    });

  }

  
}



