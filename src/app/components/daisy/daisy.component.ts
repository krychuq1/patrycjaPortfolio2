import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PDFProgressData} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-daisy',
  templateUrl: './daisy.component.html',
  styleUrls: ['./daisy.component.scss']
})
export class DaisyComponent implements OnInit, AfterViewInit {
  percentage: number;
  isLoaded: boolean;
  @ViewChild('iframe') iframe: ElementRef;
  constructor() {
    this.percentage = 0;
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    console.log('done here');
  }
  loadCallBack(): void {
    this.isLoaded = true;
  }
}
