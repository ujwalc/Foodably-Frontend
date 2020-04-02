import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-edit-prep-step',
  templateUrl: './create-edit-prep-step.component.html',
  styleUrls: ['./create-edit-prep-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditPrepStepComponent implements OnInit {

  @Input() isLast: number;
  @Input() total: number;

  @Input() stepForm: FormGroup;
  @Input() index: number;
  @Output() deleteStep: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onDeleteStep() {
    this.deleteStep.emit(this.index);
  }
}
