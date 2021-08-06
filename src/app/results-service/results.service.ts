import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Results } from '../results-class/results';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class ResultsRequestService {
  private api = "https://djangoangulartest.herokuapp.com/patientinpunt/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

   }
  //  resultsRequest(){
  //    interface ApiResponse {
  //      name : string;
  //      symptoms : string;
  //      location: number;
  //    }
  //    let promise = new Promise<ApiResponse | void>((resolve, reject) =>{
  //      this.http.get<ApiResponse>("https://djangoangulartest.herokuapp.com/patientinpunt/1").toPromise().then(response=>{
  //        this.results.name = response.name
  //        console.log(this.results.name)

  //        this.results.symptoms= response.symptoms
  //        this.results.location = response.location
  //        resolve()
  //      },
  //      error=>{
  //        this.results.name = "errrro"
  //        this.results.symptoms = "headachhe"
  //        this.results.location = 1
  //        reject(error)
  //      })
  //    })
  //    return promise
  //  }
  constructor(private httpClient: HttpClient) { }

getData(): Observable<any[]> {
  return this.httpClient.get<any[]>(this.api);
}
// postData(result: Results): Observable<Results>{
//   return this.httpClient.post<Results>(this.api, result, httpOptions)(
//   )
// }

}


