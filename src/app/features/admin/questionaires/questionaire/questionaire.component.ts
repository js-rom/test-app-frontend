import { Component, inject } from '@angular/core';
import { SingleSelectionQuestionComponent } from './single-selection-question/single-selection-question.component';
import { NewQuestionaireService } from './new-questionaire.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionCreationComponent } from "./question-creation/question-creation.component";
import { NgFor } from '@angular/common';
import { SingleSelectionQuestion } from './single-selection-question.model';
import { MatIcon } from '@angular/material/icon';
import { InputData } from "../../../../common/components/input-data.component";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CreationScenery } from './creation-scenery';
import { QuestionaireScenery } from './Questionaire-scenery';
import { EditionScenery } from './edition-scenery';

@Component({
  selector: 'app-questionaire',
  imports: [SingleSelectionQuestionComponent, QuestionCreationComponent, NgFor, MatIcon, InputData],
  providers: [NewQuestionaireService, CreationScenery],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})
export class QuestionaireComponent {

  private id: string;
  private questions: Array<SingleSelectionQuestion>;
  private scenery: QuestionaireScenery;

  constructor(private readonly dialog: MatDialog,
    private router: Router,
    private readonly activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.resolveScenery();
    this.readAll();
  }

  resolveScenery() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const scenery = params.get('scenery');
      switch (scenery) {
        case "create":
          console.log('create')
          this.scenery = inject(CreationScenery);
          break;
        case "edit":
          this.scenery = inject(EditionScenery);
          break;
      }
    });
  }

  getQuestions() {
    return this.questions.reverse();
  }

  readAll() {
    console.log(this.scenery)
    this.scenery.readAll(this.id)
      .subscribe(questions => this.questions = questions)
  }

  create(question: SingleSelectionQuestion): void {
    this.scenery.create(question);
  }

  save() {
    this.scenery.save(this.questions);
    this.router.navigate(['/admin/questionaires']);
  }

  delete(question: SingleSelectionQuestion) {
    this.scenery.delete(question)
  }

  edit(question: SingleSelectionQuestion) {
    this.scenery.edit(question)
  }

  cancelEdition(): void {
    this.scenery.cancelEdition()
  }

  update(questionUpdate: SingleSelectionQuestion) {
    this.scenery.update(questionUpdate)
  }

  isEdition(): boolean {
    return this.scenery.isEdition;
  }

  getQuestionCreateUpdate(): SingleSelectionQuestion {
    return this.scenery.questionCreateUpdate;
  }
}
