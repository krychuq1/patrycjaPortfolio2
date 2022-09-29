import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent implements OnInit {
  @Input() img: string;
  @Input() img2: string;
  @Input() text: string;
  @Input() text2: string;
  @Input() link: string;
  @Input() link2: string;
  constructor(public router: Router) { }

  ngOnInit(): void {}

}
