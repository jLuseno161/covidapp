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


  newInput: any = {
    symptoms: null,
    location: null,
  };
  
  constructor(private resultsService:PatientInputService) { }
  ngOnInit(): void {
  }
  submitInput(): void {
    const { user, location,symptoms} = this.newInput;
    this.resultsService.patient(location,symptoms ).subscribe(
      data => {
        console.log(data);
      },
    );
  }
}