import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omnistrat',
  templateUrl: './omnistrat.component.html',
  styleUrls: ['./omnistrat.component.css']
})
export class OmnistratComponent implements OnInit {
  isLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
