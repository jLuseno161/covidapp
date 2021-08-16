import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DoctorInput } from '../doctor-input-class/doctor-input';
import { DoctorInputService } from '../doctor-input.service';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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

  showSuccess() {
    this.toastr.success('Recomendations successfully submitted and updated to the patients dashboard');
  }


  constructor(private doctorInputService: DoctorInputService, private authService: AuthService, private toastr: ToastrService, private router: Router) { }
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
    this.router.navigate(['results']);
    // window.location.reload();
  }
}