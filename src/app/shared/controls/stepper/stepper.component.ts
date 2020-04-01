import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  @Input()
  annotation: string;

  @Input()
  step = 1;

  value = 1;

  constructor() { }

  onPlus() {
    if (this.value < this.step) {
      this.value = this.step;
    } else {
      this.value = this.value + this.step;
    }
  }

  onMinus() {
    const reducedValue = this.value - this.step;
    console.log(reducedValue);
    if (reducedValue < 1) {
      this.value = 1;
    } else {
      this.value = reducedValue;
    }
  }
}
