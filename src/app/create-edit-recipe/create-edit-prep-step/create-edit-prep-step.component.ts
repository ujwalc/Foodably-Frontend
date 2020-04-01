import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-prep-step',
  templateUrl: './create-edit-prep-step.component.html',
  styleUrls: ['./create-edit-prep-step.component.scss']
})
export class CreateEditPrepStepComponent implements OnInit {

  @Input()
  currentIndex: number;

  @Input()
  total: number;

  constructor() {
    this.currentIndex = 1;
    this.total = 2;
  }

  ngOnInit(): void {
  }

  onDeleteStep() {}

}
