import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrls: ['./patient-dash.component.css']
})
export class PatientDashComponent implements OnInit {

  username: string;
  user_id: any
  patientsStatus: any;
  patient: any;
  patientsNames!: any[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')

    this.authService.getStatus().subscribe((res: any[]) => {
      this.patientsNames = res;
      console.log(this.username)
      console.log(this.patientsNames)
      this.patientsStatus = this.patientsNames.filter(patienty => patienty.name === this.username)
      console.log(this.patientsStatus)


    })
  }
  patients(patients: any) {
    throw new Error('Method not implemented.');
  }

}