import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IQuestion {
  Id: number;
  question: string;
  options: string[];
  answer: number;
}

@Injectable()
export class QuestionCollection {
  constructor(private http: HttpClient) {}
  get(subject: string): Observable<IQuestion[]> {
    let emptyObj: IQuestion[] = [{
      Id: 0,
      question: 'Object is not found',
      options: [],
      answer: -1
    }];
    let content = of(emptyObj);

    if ('python' == subject) {
      content =  this.http.get<IQuestion[]>('assets/python.json');
    }else if ('algo' == subject) {
      content =  this.http.get<IQuestion[]>('assets/algo.json');
    } else if ('arch' == subject) {
      content =  this.http.get<IQuestion[]>('assets/arch.json');
    } else if ('dbms' == subject) {
      content =  this.http.get<IQuestion[]>('assets/dbms.json');
    } else if ('ds' == subject) {
      content =  this.http.get<IQuestion[]>('assets/ds.json');
    } else if ('oop' == subject) {
      content =  this.http.get<IQuestion[]>('assets/oop.json');
    } else if ('os' == subject) {
      content =  this.http.get<IQuestion[]>('assets/os.json');
    } else if ('sw-engg' == subject) {
      content =  this.http.get<IQuestion[]>('assets/sw-engg.json');
    } else if ('sw-testing' == subject) {
      content =  this.http.get<IQuestion[]>('assets/sw-testing.json');
    }
    return content;
  }
}
