import { IQuestion, QuestionCollection } from './questionColllection';

export class QuestionList {
  private questionCollection: QuestionCollection;
  private questionList: IQuestion[];
  private currentQuestionIndex = 0;
  constructor() {
    this.questionCollection = new QuestionCollection();
    this.questionList = this.questionCollection.get();
    this.questionList = this.shuffleArray([...this.questionList]).slice(0, 50);
    //this.questionList.forEach(eachQuestion => this.randomizeOptions(eachQuestion));
    const shuffledJsonData = this.questionList.map((question: any) => {
      // Shuffle the optionList
      const shuffledOptions = this.shuffleArray([...question.optionList]);
    
      // Find the index of the correct answer in the shuffled options
      const shuffledAnswerIndex = shuffledOptions.indexOf(question.optionList[question.answer - 1]);
    
      // Adjust the answer to match the new order
      const adjustedAnswer = shuffledAnswerIndex + 1;
    
      return {
        ...question,
        optionList: shuffledOptions,
        answer: adjustedAnswer,
      };
    });

    this.questionList =  shuffledJsonData
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getList(inCount: number): IQuestion[] {
    return this.questionList;
  }

  getCurrent(): IQuestion {
    let currentQuestion: IQuestion = this.questionList[this.currentQuestionIndex];
    return currentQuestion;
  }
  getAnswer(): number {
    return this.questionList[this.currentQuestionIndex].answer;
  }
  moveToNext(): boolean {
    let isComplete = false;
    ++this.currentQuestionIndex;

    if (this.currentQuestionIndex == this.questionList.length) {
      this.currentQuestionIndex = 0;
      isComplete = true;
    } else {
      let currentQuestion: IQuestion = this.questionList[this.currentQuestionIndex];
      //this.randomizeOptions(currentQuestion);
    }

    return isComplete;
  }
}