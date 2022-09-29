import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-thumb',
  templateUrl: './project-thumb.component.html',
  styleUrls: ['./project-thumb.component.scss']
})
export class ProjectThumbComponent implements OnInit {
  @Input() text: string;
  @Input() img: string;
  @Input() reverse: boolean;
  @Input() last: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
