import { Component, OnInit } from '@angular/core';
import { DoctorInputService } from 'src/app/doctor-input-service/doctor-input.service';
// import {DoctorInputService} from '../doctor-input-service/doctor-input.service';
import { AuthService } from 'src/app/services/auth.service';
import { TracingRequestService } from 'src/app/tracing-http/tracing-request.service';

@Component({
  selector: 'app-doc-dash',
  templateUrl: './doc-dash.component.html',
  styleUrls: ['./doc-dash.component.css']
})


export class DocDashComponent implements OnInit {
  username: string;
  possibleContacts!: any[];
  ItemsArray!: any[];
  possible: number;
  CaseStatus!: any[];
  user_id: any;
  positive:any[];
  negative:any[];
  pos: number;
  neg: number;



  constructor(private tracingService: TracingRequestService,private authService: AuthService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')

    this.tracingService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
      this.possible = this.ItemsArray.length
      console.log(this.possible);

      this.authService.getStatus().subscribe((res: any) => { 
        this.CaseStatus =res;
        console.log(this.CaseStatus)

      this.positive = this.CaseStatus.filter(status => status.status === 'positive')
      this.pos = this.positive.length
      console.log(this.pos)

      this.negative = this.CaseStatus.filter(status => status.status === 'negative')
      this.neg = this.negative.length
      console.log(this.neg)
    })
  
   

      // this.pos = this.CaseStatus.filter(id => id.user == this.user_id);
      // this.pos = this.CaseStatus.length

        // this.pos = this.Positive.length
    })

  }

}
