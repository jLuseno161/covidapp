import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile-class/profile';
import { ProfileService } from './profile.service';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  profile!: Profile;

  constructor(private profileService: ProfileService) { 
   
  }

  ngOnInit()  {
    this.profileService.profileRequest()
    this.profile = this.profileService.profile
}

}
