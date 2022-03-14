import { Injectable } from '@angular/core';
import { concatMap, delay, from, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getData(): Observable<any> {
    return from('a').pipe(concatMap(item => of(item).pipe(delay(2000))));
  }
}
