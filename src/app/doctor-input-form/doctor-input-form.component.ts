import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DoctorInput } from '../doctor-input-class/doctor-input';
import { DoctorInputService } from '../doctor-input.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-doctor-input-form',
  templateUrl: './doctor-input-form.component.html',
  styleUrls: ['./doctor-input-form.component.css']
})
export class DoctorInputFormComponent implements OnInit {

  newInput: any = {
    name: null,
    status: null,
    recomendations: [],
    remarks: null,
  };
  patientsNames!: any[];
  patients: any[];


  constructor(private doctorInputService: DoctorInputService, private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.getUsers().subscribe((res: any[]) => {
      this.patientsNames = res;
      this.patients = this.patientsNames.filter(patient => patient.role === 'is_patient')
      console.log(this.patients)

    })
  }
  submitInput(): void {

    const { name, status, recomendations, remarks } = this.newInput;
    this.doctorInputService.patient(name, status, recomendations, remarks).subscribe(
      data => {
        // console.log(data);
      },
    );
    // window.location.reload();
  }
}