import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DoctorInput } from '../doctor-input-class/doctor-input';
import { DoctorInputService } from '../doctor-input.service';
import { ResultsRequestService } from '../results-service/results.service';
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
  PatId: any;


  constructor(private doctorInputService: DoctorInputService, private resultRequestService: ResultsRequestService, private authService: AuthService) { }
  // ngOnInit(): void {

  // }
  submitInput(): void {

    const { name, status, recomendations, remarks } = this.newInput;
    this.doctorInputService.patient(name, status, recomendations, remarks).subscribe(
      data => {
        // console.log(data);
      },
    );
    // window.location.reload();
  }
  public async ngOnInit(): Promise<void> {
    this.resultRequestService.onDoctorSelect.subscribe(value => {
      console.log('FROM Display Comp -----', value);
      this.PatId = value;
      if (this.PatId) {
        this.resultRequestService.getPatientsById(this.PatId).then(response => {
          // console.log(response) 
        })
      }
    })
    this.authService.getPatients().subscribe((res: any[]) => {
      this.patientsNames = res;
      // this.patients = res
      console.log(this.PatId + 'dfghjkl')
      console.log(this.patientsNames)
      this.patients = this.patientsNames.filter(patient => patient.id === this.PatId)
      console.log(this.patients)

    })
  }
}