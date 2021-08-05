import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import { Tracing } from '../tracing-class/tracing';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  newTracing = new Tracing("",0,new Date());
  @Output() addTracing = new EventEmitter<Tracing>();
  submitTrace(){
    this.addTracing.emit(this.newTracing);
  }

  constructor() { }

  ngOnInit(): void{
  }

}
