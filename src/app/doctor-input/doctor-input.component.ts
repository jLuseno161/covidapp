import { Component, OnInit } from '@angular/core';
import {DoctorInput} from '../doctor-input-class/doctor-input';
import {DoctorInputService} from '../doctor-input-service/doctor-input.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-doctor-input',
  templateUrl: './doctor-input.component.html',
  styleUrls: ['./doctor-input.component.css']
})
export class DoctorInputComponent implements OnInit {

  doctorInput!: DoctorInput;
  constructor(private doctorInputService: DoctorInputService) { }

  ngOnInit(): void {
    this.doctorInputService.doctorInputRequest()
    this.doctorInput = this.doctorInputService.doctorInput
  }

}


