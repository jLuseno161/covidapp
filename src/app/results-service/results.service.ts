import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Results } from '../results-class/results';


@Injectable({
  providedIn: 'root'
})
export class ResultsRequestService {
  results!: Results;

  constructor(private http:HttpClient) {
    this.results = new Results("","",1);
   }
   resultsRequest(){
     interface ApiResponse {
       name : string;
       symptoms : string;
       location: number;
     }
     let promise = new Promise<ApiResponse | void>((resolve, reject) =>{
       this.http.get<ApiResponse>("https://djangoangulartest.herokuapp.com/patientinpunt/1").toPromise().then(response=>{
         this.results.name = response.name
         console.log(this.results.name)

         this.results.symptoms= response.symptoms
         this.results.location = response.location
         resolve()
       },
       error=>{
         this.results.name = "errrro"
         this.results.symptoms = "headachhe"
         this.results.location = 1
         reject(error)
       })
     })
     return promise
   }
}

