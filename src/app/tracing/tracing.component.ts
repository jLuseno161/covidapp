import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tracing } from '../tracing-class/tracing';
import { TracingRequestService } from '../tracing-http/tracing-request.service';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})
export class TracingComponent implements OnInit {
    form:any = {
        name : null,
        contact:null,
        date : null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    ItemsArray!: any[];
    newTracing= new Tracing ("",0,new Date());
    @Output()  addTracing =new EventEmitter<Tracing>();
    // ItemsArray= [];
    submitTrace(){
        this.addTracing.emit(this.newTracing);
        console.log(this.newTracing);
    }
  constructor(private tracingService: TracingRequestService) { }

  ngOnInit(): void {
    this.tracingService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;
    })  
  }
  onSubmit():void {
      const {name,contact,date}= this.form;
      this.tracingService.addData(name,contact,date).subscribe(
        data => console.log("success"),
        
        err => console.log("error")
      );
  }

}
