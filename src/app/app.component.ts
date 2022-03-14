import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-prerender';
  data: string | undefined;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    if (this.data) {
      return;
    }

    this.dataService.getData().subscribe(value => {
      this.data = value;
    });
  }

}
