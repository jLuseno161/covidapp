import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Results } from '../results-class/results';

@Component({
  selector: 'app-patient-input-form',
  templateUrl: './patient-input-form.component.html',
  styleUrls: ['./patient-input-form.component.css']
})
export class PatientInputFormComponent implements OnInit {

  newInput = new Results("","","");
  @Output() addResult = new EventEmitter<Results>();
  http: any;

  submitInput(){
    this.addResult.emit(this.newInput);

    this.http.post('https://djangoangulartest.herokuapp.com/patientinpunt/', this.newInput).subscribe(
    (response) => console.log(response),
    (error) => console.log(error));
      }
    
  constructor() { }

  ngOnInit() {
  }

}
