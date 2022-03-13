import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-prerender';
  dataLoaded = false;

  ngOnInit(): void {

    setTimeout(() => {
      console.log('sleep...');
      this.dataLoaded = true;
    }, 2000);
  }

}
