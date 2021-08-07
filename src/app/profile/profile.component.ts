import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile-class/profile';
import { ProfileService } from './profile.service';
import { Tracing } from '../tracing-class/tracing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  profile!: Profile;
  traces : Tracing [] = []
  

  addNewTracing(trace: any){
    let tracingLength=this.traces.length;
    trace.id = tracingLength+1;
    trace.date = Date();
    this.traces.push(trace);
  }

  

  constructor(private profileService: ProfileService) { 
   
  }


  ngOnInit()  {
    this.profileService.profileRequest()
    this.profile = this.profileService.profile
}

}
