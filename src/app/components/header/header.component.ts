import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('enabledStateChange', [
      state(
        'active',
        style({
          opacity: 1,
        })
      ),
      // ,paddingTop: '60px'
      // height: 'calc(100vh - 154px)'
      state(
        'leave',
        style({
          opacity: 0,
          zIndex: 0
          // display: 'none'
        })
      ),
      transition('* <=> *', animate('300ms ease-out')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  active: boolean;
  @Output() toggle = new EventEmitter<boolean>();
  constructor() {
    this.active = false;
  }

  ngOnInit(): void {
  }
  clear(): void {
    this.active = false;
    this.toggle.emit(this.active);
  }
  toggleActive(): void {
    this.active = !this.active;
    this.toggle.emit(this.active);
    window.scrollTo({ top: 0 });
    console.log('here ', this.active);
  }
}
