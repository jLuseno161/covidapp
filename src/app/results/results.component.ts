import { Component, OnInit } from '@angular/core';
import {Results} from '../results-class/results';
import {ResultsRequestService} from '../results-service/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results!: Results;

  constructor(private resultsService: ResultsRequestService) { }

  ngOnInit(): void {
    this.resultsService.resultsRequest()
    this.results = this.resultsService.results
  }

}




