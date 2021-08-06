import { Component, OnInit } from '@angular/core';
import {Results} from '../results-class/results';
import {ResultsRequestService} from '../results-service/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  ItemsArray!: Results[];
  // ItemsArray= [];

  addNewInput(ItemsArray){
    let inputLength = this.ItemsArray.length;
    ItemsArray.id = inputLength+1;
    this.ItemsArray.push(ItemsArray)
  }

  constructor(private resultRequestService: ResultsRequestService) { }

  ngOnInit() {
    this.resultRequestService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;
      console.log (this.ItemsArray)
    })  
  }

}






