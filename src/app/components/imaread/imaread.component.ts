import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imaread',
  templateUrl: './imaread.component.html',
  styleUrls: ['./imaread.component.css']
})
export class ImareadComponent implements OnInit {
  public isLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
