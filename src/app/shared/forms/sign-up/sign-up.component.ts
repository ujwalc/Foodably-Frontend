import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../profile-management.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output()
  close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit();
  }
}
