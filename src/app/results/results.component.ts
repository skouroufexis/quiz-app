import { Question } from './../quiz.model';
import { Component, OnInit,Input } from '@angular/core';
import { Answers } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {

    

  }

  @Input() answers: Answers;
  

}
