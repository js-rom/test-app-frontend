import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Question } from '../question.model';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { SingleSelectionQuestion } from '../single-selection-question.model';

@Component({
  selector: 'app-question-creation',
  imports: [MatCard,
    MatCardActions,
    MatCardContent,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton],
  templateUrl: './question-creation.component.html',
  styleUrl: './question-creation.component.css'
})
export class QuestionCreationComponent {

  @Input() questionCreateUpdate: SingleSelectionQuestion;
  @Input() editAction = false;


  constructor() {
    this.questionCreateUpdate = new Question(undefined, undefined, undefined, undefined);

  }

  @Output() create = new EventEmitter<any>();
  @Output() cancelEdition = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();

  onCreate(): void {

    this.create.emit(JSON.parse(JSON.stringify(this.questionCreateUpdate)));

  }

  onUpdate(): void {

    this.update.emit(this.questionCreateUpdate);
  }

  onCancelEdition(): void  {

    this.cancelEdition.emit();
  }

  reset(form) {

    form.resetForm();

  }
}
