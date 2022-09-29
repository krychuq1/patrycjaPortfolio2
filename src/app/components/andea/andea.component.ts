import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andea',
  templateUrl: './andea.component.html',
  styleUrls: ['./andea.component.css']
})
export class AndeaComponent implements OnInit {
  isLoaded: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
