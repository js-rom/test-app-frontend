import { Component, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { SingleSelectionQuestionService } from './single-selection-question.service';
import { NgFor } from '@angular/common';
import { SingleSelectionOption } from './single-selection-option.model';


@Component({
  selector: 'app-single-selection-question',
  imports: [MatCard, MatCardActions, MatCardContent, MatRadioGroup, FormsModule, NgFor, MatRadioButton],
  templateUrl: './single-selection-question.component.html',
  styleUrl: './single-selection-question.component.scss'
})
export class SingleSelectionQuestionComponent {
  @Input() id = '';
  @Input() description = '';
  selectedOption : string;
  @Input() correctOptionId = '';
  options: SingleSelectionOption[];

  constructor(private readonly singleSelectionQuestionService: SingleSelectionQuestionService) {
    singleSelectionQuestionService.readAllOptionsBy(this.id).subscribe(options => this.options = options);
    this.selectedOption = this.correctOptionId;
  }

}
