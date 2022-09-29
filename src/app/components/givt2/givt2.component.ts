import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-givt2',
  templateUrl: './givt2.component.html',
  styleUrls: ['./givt2.component.css']
})
export class Givt2Component implements OnInit {
  public isLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
