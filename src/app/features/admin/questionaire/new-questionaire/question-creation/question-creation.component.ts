import { Component, EventEmitter, Output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { Question } from '../question.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    ReactiveFormsModule],
  templateUrl: './question-creation.component.html',
  styleUrl: './question-creation.component.css'
})
export class QuestionCreationComponent {

  questionCreate: Question;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionCreate = new Question(undefined, undefined, undefined, undefined);
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: [null, [Validators.required, Validators.min(18)]]
    });
  }
  @Output() create = new EventEmitter<any>();

  onCreate(): void {

    this.create.emit(JSON.parse(JSON.stringify(this.questionCreate)));
    this.questionCreate = new Question(undefined, undefined, undefined, undefined);

  }

}
