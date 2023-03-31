import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  //answers: string[] = []
  @Input() answerSelected: string = ""
  @Input() finished: boolean = false

  constructor(){}

  ngOnInit(): void {

  }

}
