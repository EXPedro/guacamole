import { Component, Input, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent  implements OnInit {

  @Input() questionSelected: any
  @Input() questions: any
  @Input() finished: boolean = false
  //answers: string[] = []
  @Output() clicado = new EventEmitter<string>();
  //questionIndex: number = 0
  //questionMaxIndex: number = 0
  //finished: boolean = false
  //answerSelected: string = ""

  constructor(){}

  ngOnInit(): void {

  }

  playerChoose(value: string){
    //this.answers.push(value)
    this.nextQuestion(value)
    //console.log(this.answers)
  }

  nextQuestion(value: string) {
    this.clicado.emit(value);
  }
}
