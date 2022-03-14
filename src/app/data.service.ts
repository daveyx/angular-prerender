import { Injectable } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: string | undefined;

  constructor() {
  }

  getData(): void {
    if (this.data) {
      return;
    }

    from('a').pipe(concatMap(item => of(item).pipe(delay(2000)))).subscribe(value => {
      this.data = value;
    });
  }

}
