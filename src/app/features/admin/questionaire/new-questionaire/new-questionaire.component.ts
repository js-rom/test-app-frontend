import { Component } from '@angular/core';
import { SingleSelectionQuestionComponent } from './single-selection-question/single-selection-question.component';
import { Question } from './question.model';
import { NewQuestionaireService } from './new-questionaire.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionCreationComponent } from "./question-creation/question-creation.component";
import { NgFor } from '@angular/common';
import { SingleSelectionQuestion } from './single-selection-question.model';
import { QuestionaireService } from '../questionaire.service';
import { MatIcon } from '@angular/material/icon';
import { InputData } from "../../../../common/components/input-data.component";

@Component({
  selector: 'app-new-questionaire',
  imports: [SingleSelectionQuestionComponent, QuestionCreationComponent, NgFor, MatIcon, InputData],
  templateUrl: './new-questionaire.component.html',
  styleUrl: './new-questionaire.component.scss'
})
export class NewQuestionaireComponent {

  constructor(private readonly dialog: MatDialog,
    private readonly newQuestionaireService: NewQuestionaireService,
    private readonly questionaireService: QuestionaireService) { }

  get questions() {
    return this.newQuestionaireService.readAll().reverse()
  }

  set questions(questions: Array<SingleSelectionQuestion>) {

  }

  create(question: Question): void {
    this.newQuestionaireService.add(question);
    this.questions = this.newQuestionaireService.readAll();
  }

  save() {
    this.questionaireService.create(this.questions);
  }

  delete(question: SingleSelectionQuestion) {
    this.newQuestionaireService.delete(question)
  }
}
