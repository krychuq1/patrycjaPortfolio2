import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navOpen: boolean;
  constructor(public router: Router) {
    this.navOpen = false;
  }
  openNewTab(url): void {
    window.open(url, '_blank');

  }
  title = 'patrycjaPortfolio2';
}
