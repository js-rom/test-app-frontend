import { Component, EventEmitter, Output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { Question } from '../question.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';

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
    MatIcon,
    ReactiveFormsModule,
    MatButton],
  templateUrl: './question-creation.component.html',
  styleUrl: './question-creation.component.css'
})
export class QuestionCreationComponent {

  questionCreate: Question;
  form: FormGroup;
  skills = ['skill 1', 'skill 2']
  skill;

  constructor() {
    this.questionCreate = new Question(undefined, undefined, undefined, undefined);

  }
  @Output() create = new EventEmitter<any>();

  onCreate(): void {

    this.create.emit(JSON.parse(JSON.stringify(this.questionCreate)));
    this.questionCreate = new Question(undefined, undefined, undefined, undefined);

  }

reset(form) {
  form.resetForm();
}
}
