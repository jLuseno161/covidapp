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
        user: null,
        name : null,
        contact:null,
        date : null
    };
    username: string;

    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    ItemsArray!: any[];
    newTracing= new Tracing ("","",0,new Date());
    @Output()  addTracing =new EventEmitter<Tracing>();
  
  constructor(private tracingService: TracingRequestService) { }

  ngOnInit(): void {
    
    this.username = localStorage.getItem('username')

    this.tracingService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;

    })  
  }

  submitTrace(): void {
    const {user, name, contact,date} = this.newTracing;
    this.tracingService.addData(user, name, contact, date).subscribe(
      data => {
        console.log(data);
      
      },
      err => {
       console.log("error");
      }
    );
  }

}
