import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { SingleSelectionQuestion } from '../single-selection-question.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-single-selection-question',
  imports: [MatCard,
    MatCardActions,
    MatCardContent,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    MatIcon],
  templateUrl: './single-selection-question.component.html',
  styleUrl: './single-selection-question.component.scss'
})
export class SingleSelectionQuestionComponent {

  @Input() question: SingleSelectionQuestion;
  @Input() index: number;
  @Input() updateAction = false;
  @Input() deleteAction = false;
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  onUpdate(): void {
    this.update.emit(this.question);
  }

  onDelete(): void {
    this.delete.emit(this.question);
  }

}
