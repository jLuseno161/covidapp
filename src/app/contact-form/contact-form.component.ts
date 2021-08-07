import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import { Tracing } from '../tracing-class/tracing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  SERVER_URL = "https://djangoangulartest.herokuapp.com/contact/";
  uploadForm!: FormGroup; 
  // newTracing = new Tracing("",0,new Date());
  // @Output() addTracing = new EventEmitter<Tracing>();
  // submitTrace(){
  //   this.addTracing.emit(this.newTracing);
  // }




  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
}