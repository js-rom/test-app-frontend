import { Component, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SingleSelectionQuestion } from '../single-selection-question.model';


@Component({
  selector: 'app-single-selection-question',
  imports: [MatCard,
    MatCardActions,
    MatCardContent,
    MatRadioGroup,
    FormsModule,
    NgFor,
    MatRadioButton],
  templateUrl: './single-selection-question.component.html',
  styleUrl: './single-selection-question.component.scss'
})
export class SingleSelectionQuestionComponent {

  @Input() question: SingleSelectionQuestion;
  @Input() index: number;

}
