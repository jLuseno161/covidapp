import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DoctorInput } from '../doctor-input-class/doctor-input';

@Component({
  selector: 'app-doctor-input-form',
  templateUrl: './doctor-input-form.component.html',
  styleUrls: ['./doctor-input-form.component.css']
})
export class DoctorInputFormComponent implements OnInit {

  newInput = new DoctorInput("","","","");
  @Output() addInput = new EventEmitter<DoctorInput>();

  addStatus(){
this.addInput.emit(this.newInput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
