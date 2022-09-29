import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-givt',
  templateUrl: './givt.component.html',
  styleUrls: ['./givt.component.css']
})
export class GivtComponent implements OnInit {
  public isLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
