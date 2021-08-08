import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrls: ['./patient-dash.component.css']
})
export class PatientDashComponent implements OnInit {
  
  username: string;

  constructor() { }

  ngOnInit(): void {
    
    this.username = localStorage.getItem('username')

  }

}
