import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-axa',
  templateUrl: './axa.component.html',
  styleUrls: ['./axa.component.css']
})
export class AxaComponent implements OnInit {
  public isLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
