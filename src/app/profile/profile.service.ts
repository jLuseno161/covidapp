import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Profile } from '../profile-class/profile';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile!: Profile;
  constructor(private http:HttpClient) { 
    this.profile= new Profile("","","","");
  }
  profileRequest(){
    interface ApiResponse{
      bio: string;
      name: string;
      location: string;
      profile_pic:string;
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
          this.profile.bio = response.bio
          this.profile.name=response.name
          this.profile.location = response.location
          this.profile.profile_pic=response.profile_pic
          resolve()
      },
      error=>{
        this.profile.bio = "hello"
          this.profile.name="denno"
          this.profile.location = "kamaka"
          this.profile.profile_pic="hhh.jpg"
          reject(error)
        })
      })
      return promise
    }
 }