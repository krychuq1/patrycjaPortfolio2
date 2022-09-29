import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethic',
  templateUrl: './ethic.component.html',
  styleUrls: ['./ethic.component.css']
})
export class EthicComponent implements OnInit {
  isLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
