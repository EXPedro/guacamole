import { Component, OnInit } from '@angular/core';
import quizz_question from "../../../assets/data/quizz_questions.json"


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent   implements OnInit {

  subtitle:string = ""
  questions: any
  questionSelected: any
  questionIndex: number = 0
  questionMaxIndex: number = 0
  answers: string[] = []
  answerSelected: string = ""
  finished: boolean = false

  constructor(){}

  ngOnInit(): void {
    if(quizz_question){
      this.subtitle = quizz_question.title
      this.questions = quizz_question.questions
      this.questionSelected = quizz_question.questions[this.questionIndex]
      //this.answers = this.questionSelected.options.alias
      this.questionIndex = 0
      this.questionMaxIndex = quizz_question.questions.length
    }
  }

  async nextStep(value: string){
    this.questionIndex += 1
    this.answers.push(value)
    console.log(this.answers)

    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quizz_question.results[finalAnswer as keyof typeof quizz_question.results ]
    }
    console.log(this.questionIndex)
  }

  async checkResult(anwsers:string[]){

    const result = anwsers.reduce((previous, current, i, arr)=>{
        if(
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
        ){
          return previous
        }else{
          return current
        }
    })

    return result
  }

}
