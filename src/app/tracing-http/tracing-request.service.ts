import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Tracing } from '../tracing-class/tracing';
@Injectable({
  providedIn: 'root'
})
export class TracingRequestService {
  tracing!: Tracing;
  constructor(private http:HttpClient) {
    this.tracing= new Tracing("",0,new Date());
  }
  tracingRequest(){
    interface ApiResponse {
      name:string;
      contact:number;
      date:Date;
    }
    let promise = new Promise<ApiResponse | void>((resolve, reject) =>{
      this.http.get<ApiResponse>(environment.apiUrl2).toPromise().then(response=>{
        this.tracing.name = response.name
        console.log(this.tracing.name)
        this.tracing.contact=response.contact
        this.tracing.date = response.date
        resolve()
      },
      error=>{
         this.tracing.name = "whwhwhw"
         this.tracing.contact = 781920345
         this.tracing.date =new Date()
         reject(error)

      })
      
    })
    return promise
  }
}
