import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    // { path: 'register', component: RegisterComponent },
    { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
    { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
    { path: 'revise', component: QuestionDisplayComponent }, 
    { path: 'python', component: RegisterComponent }, 
    { path: 'algo', component: RegisterComponent },
    { path: 'arch', component: RegisterComponent },
    { path: 'dbms', component: RegisterComponent },
    { path: 'ds', component: RegisterComponent },
    { path: 'oop', component: RegisterComponent },
    { path: 'os', component: RegisterComponent },
    { path: 'sw-engg', component: RegisterComponent },
    { path: 'sw-testing', component: RegisterComponent },
    { path: '', redirectTo: '/python', pathMatch: 'full' }
];
