import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrls: ['./patient-dash.component.css']
})
export class PatientDashComponent implements OnInit {
  
  username: string;
  user_id:any

  constructor() { }

  ngOnInit(): void {
    
    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')


  }

}
