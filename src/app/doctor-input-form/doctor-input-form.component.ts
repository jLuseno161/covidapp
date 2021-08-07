import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DoctorInput } from '../doctor-input-class/doctor-input';
import { DoctorInputService } from '../doctor-input.service';

@Component({
  selector: 'app-doctor-input-form',
  templateUrl: './doctor-input-form.component.html',
  styleUrls: ['./doctor-input-form.component.css']
})
export class DoctorInputFormComponent implements OnInit {

  newInput: any = {
    name: null,
    status: null,
    recomendations: null,
    remarks: null,
  };
  
  constructor(private doctorInputService:DoctorInputService) { }
  ngOnInit(): void {
  }
  submitInput(): void {
    const { name, status, recomendations, remarks} = this.newInput;
    this.doctorInputService.patient(name,status, recomendations, remarks ).subscribe(
      data => {
        console.log(data);
      },
    );
  }
}
