import { Component, OnInit } from '@angular/core';

import { Tracing } from '../tracing-class/tracing';
import { TracingRequestService } from '../tracing-http/tracing-request.service';
@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})
export class TracingComponent implements OnInit {
  tracing!: Tracing;
  traceses!:Tracing[];
  addNewTracing(tracing: any){
      let tracingLength = this.traceses.length;
      tracing.id = tracingLength+1;
      tracing.date = new Date(tracing.date.getTime());
      this.tracing.push(tracing);
  }
  constructor(private tracingService: TracingRequestService) { }
  
  ngOnInit() {
    this.tracingService.tracingRequest()
    this.tracing=this.tracingService.tracing
  }
}
