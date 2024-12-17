import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { QuizService } from '../quiz.service';
import { IQuestion } from '../data/questionCollection';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-question-display',
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './question-display.component.html',
  styleUrl: './question-display.component.css'
})
export class QuestionDisplayComponent {
  questionsSubject!: IQuestion[];
  baseQuestions: IQuestion[];

  constructor(
    private activatedRoute: ActivatedRoute, 
    public quizService: QuizService) {
      this.questionsSubject = [];
      this.baseQuestions = [];
    }

  ngOnInit() {
    this.activatedRoute.url.subscribe((urlSegments) => {
      const lastPath = urlSegments[0]?.path; // 'revise'
      if (lastPath === 'revise') {
        this.questionsSubject = [];
        const selectedLanguage = this.quizService.getSubject();
        this.quizService.getAllQuestions(selectedLanguage).subscribe(data => {
          this.questionsSubject = data;
          this.baseQuestions = this.questionsSubject;
        });
        
      }
    });
  }
    
  
  getCorrectAnswerClass(indexQuestion: number, currentIndex: number): string {
    const question =  this.questionsSubject[indexQuestion];
    const answerIndex = question.answer - 1;

    return currentIndex == answerIndex ? 'correct-answer' : '';
  }
}
