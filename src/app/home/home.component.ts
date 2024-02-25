import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/quiz.service";

@Component({
  selector: "home-quiz",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  
  subjectList = [
    { title: 'Algorithm' },
    { title: 'Data Base Management System' },
    { title: 'Data Structures' },
    { title: 'Object Oriented Programming' },
    { title: 'Operating System' },
    { title: 'Programming' },
    { title: 'Software Engineering' },
    { title: 'Software Testing' }
  ];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  learn (index: number) {
    
  }

  quiz(index: number) {
    switch(index) {
      case 0: this.router.navigate(['/subject/algo']); break;
      case 1: this.router.navigate(['/subject/dbms']); break;
      case 2: this.router.navigate(['/subject/ds']); break;
      case 3: this.router.navigate(['/subject/oop']); break;
      case 4: this.router.navigate(['/subject/os']); break;
      case 5: this.router.navigate(['/subject/prog']); break;
      case 6: this.router.navigate(['/subject/swengg']); break;
      case 7: this.router.navigate(['/subject/swtest']); break;
    }
    
  }
}
