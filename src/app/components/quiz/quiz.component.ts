import { Component, Input, OnInit } from '@angular/core';
import quiz_questions from "../../../assets/data/quiz_questions.json"

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  
  @Input()
  title:string = ""

  questions:any 
  questionSelected:any 

  answers:string[] = []
  answerSelected:string = ""

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished:boolean = true

  constructor( ){ }

  ngOnInit(): void {

    if(quiz_questions){
      this.finished = false;
      this.title = quiz_questions.title

      this.questions = quiz_questions.questions
      this.questionSelected = this.questions [this.questionIndex]

      this.questionMaxIndex = this.questions.length

      console.log(this.questionIndex)
      console.log(this.questionMaxIndex)
    }
     
   }

   playerChoose(value:string){
    this.answers.push(value)
   }

   async nextStep(){
    this.questionIndex++

    if(this.questionIndex < this.questionMaxIndex){
      this.questionSelected = this.questions[this.questionIndex]
    } else{
      this.finished = true
    }
  }
   
}
