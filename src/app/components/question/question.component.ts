import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  //@Input() questions: any
  @Input() questionSelected: any
  @Input() finished: boolean = false
  //@Input() questionIndex: number = 0
  //@Input() questionMaxIndex: number = 0

  constructor(){}

  ngOnInit(): void {

  }

}
