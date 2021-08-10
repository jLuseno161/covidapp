import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { PatientInputService } from '../patient-input.service';
import { Results } from '../results-class/results';
import { ResultsRequestService } from '../results-service/results.service';


@Component({
  selector: 'app-patient-input-form',
  templateUrl: './patient-input-form.component.html',
  styleUrls: ['./patient-input-form.component.css']
})
export class PatientInputFormComponent implements OnInit {

storedlocation: any;
storedcoord: any;
  newInput: any = {
    symptoms: null,
    location: null,
  };
  
  constructor(private resultsService:PatientInputService) { }
  ngOnInit(): void {
    this.storedlocation = localStorage.getItem("address");
    console.log(this.storedlocation)
    this.storedcoord = localStorage.getItem("coordinates");
  }
  submitInput(): void {
    this.storedlocation = localStorage.getItem("address")
    this.storedcoord = localStorage.getItem("coordinates");
    console.log(this.storedlocation)
    const { user, location,symptoms} = this.newInput;
    this.resultsService.patient(location,symptoms ).subscribe(
      data => {
        console.log(data);
      },
    );

    window.localStorage.clear(); 
  }
}