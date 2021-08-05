import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from '../results-class/results';
import {environment } from '../../environments/environment';
import { DoctorInput } from '../doctor-input-class/doctor-input';


@Injectable({
  providedIn: 'root'
})
export class DoctorInputService {
  doctorInput!: DoctorInput;
  constructor(private http:HttpClient) {
    this.doctorInput = new DoctorInput("",1,1,"");
   }
   doctorInputRequest(){
     interface ApiResponse {
       name: string;
       status: number;
       recomendations:  number;
       remarks : string;
     }
     
     let promise = new Promise<ApiResponse | void>((resolve, reject) =>{
      this.http.get<ApiResponse>("https://djangoangulartest.herokuapp.com/doctorsinpunt/1").toPromise().then(response=>{
        this.doctorInput.name = response.name
        console.log(this.doctorInput.name)

        this.doctorInput.status= response.status
        this.doctorInput.recomendations = response.recomendations
        this.doctorInput.remarks = response.remarks
        resolve()
      },
      error=>{
        this.doctorInput.name = "errrro"
        this.doctorInput.status = 1
        this.doctorInput.recomendations = 1
        this.doctorInput.remarks = "stay at home"
        reject(error)
      })
    })
    return promise
  }
}



