// import { Routes } from '@angular/router'
// import { RegisterComponent } from './register/register.component';
// import { QuizComponent } from './quiz/quiz.component';
// import { ResultComponent } from './result/result.component';
// import { AuthGuard } from './auth/auth.guard';
// import { DashboardComponent } from './dashboard/dashboard.component';

// export const appRoutes: Routes = [
//     //{ path: 'register', component: RegisterComponent },
//     //{ path: 'quiz/:category', component: QuizComponent, canActivate: [AuthGuard] },
//     { path: 'quiz/:category', component: QuizComponent },
//     //{ path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
//     { path: 'result', component: ResultComponent },
//     //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
//     { path: 'dashboard', component: DashboardComponent },
//     //{ path: '', redirectTo: '/register', pathMatch: 'full' }
//     { path: '', redirectTo: '/', pathMatch: 'full' }
// ];



import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  // { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'quiz/:category', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'subject/:category', component: QuizComponent },
  // { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
  { path: 'result', component: ResultComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: '/register', pathMatch: 'full' }
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


  