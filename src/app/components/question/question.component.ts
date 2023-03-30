import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: any
  questionSelected: any
  questionIndex: number = 0
  questionMaxIndex: number = 0

  constructor(){}

  ngOnInit(): void {

  }

}
