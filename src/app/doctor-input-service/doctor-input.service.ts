import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Results } from '../results-class/results';
import {environment } from '../../environments/environment';
import { DoctorInput } from '../doctor-input-class/doctor-input';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorInputService {

  private api = "https://djangoangulartest.herokuapp.com/doctorsinpunt/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

   }
//    doctorInputRequest(){
//      interface ApiResponse {
//        name: string;
//        status: number;
//        recomendations:  number;
//        remarks : string;
//      }
     
//      let promise = new Promise<ApiResponse | void>((resolve, reject) =>{
//       this.http.get<ApiResponse>("https://djangoangulartest.herokuapp.com/doctorsinpunt/1").toPromise().then(response=>{
//         this.doctorInput.name = response.name
//         console.log(this.doctorInput.name)

//         this.doctorInput.status= response.status
//         this.doctorInput.recomendations = response.recomendations
//         this.doctorInput.remarks = response.remarks
//         resolve()
//       },
//       error=>{
//         this.doctorInput.name = "errrro"
//         this.doctorInput.status = 1
//         this.doctorInput.recomendations = 1
//         this.doctorInput.remarks = "stay at home"
//         reject(error)
//       })
//     })
//     return promise
//   }
// }


constructor(private httpClient: HttpClient) { }

getData(): Observable<any[]> {
  return this.httpClient.get<any[]>(this.api);
}

}
