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
    user: null,
    name: null,
    symptoms: null,
    location: null,
  };
  user_id: any;
  
  constructor(private resultsService:PatientInputService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')
  }
  submitInput(): void {
    this.user_id = localStorage.getItem('user')    
    let {user, name, location,symptoms} = this.newInput;
    console.log(this.newInput)
    this.resultsService.addPatient(user, name,location,symptoms ).subscribe(
      data => {
        console.log(data);
      },
    );
  }
}