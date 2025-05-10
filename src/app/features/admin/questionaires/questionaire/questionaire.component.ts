import { Component, inject } from '@angular/core';
import { SingleSelectionQuestionComponent } from './single-selection-question/single-selection-question.component';
import { Question } from './question.model';
import { NewQuestionaireService } from './new-questionaire.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionCreationComponent } from "./question-creation/question-creation.component";
import { NgFor } from '@angular/common';
import { SingleSelectionQuestion } from './single-selection-question.model';
import { QuestionaireService } from '../questionaires.service';
import { MatIcon } from '@angular/material/icon';
import { InputData } from "../../../../common/components/input-data.component";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CreationScenery } from './creation-scenery';
import { QuestionaireScenery } from './Questionaire-scenery';

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
    private readonly newQuestionaireService: NewQuestionaireService,
    private readonly questionaireService: QuestionaireService,
    private readonly creationEscenery: CreationScenery,
    private router: Router,
    private readonly activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.readAll();
    this.resolveScenery();
  }

  resolveScenery() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const scenery = params.get('scenery');
      switch (scenery) {
        case "create":
          this.scenery = inject(CreationScenery);
          break;
        case "edit":
          // this.scenery = inject(CreationEscenery); // TODO
          break;
      }
    });

  }

  getQuestions() {
    return this.questions.reverse();
  }

  readAll() {
    this.creationEscenery.readAll()
      .subscribe(questions => this.questions = questions)
  }

  create(question: SingleSelectionQuestion): void {
    this.creationEscenery.create(question);
  }

  save() {
    this.creationEscenery.save(this.questions);
    this.router.navigate(['/admin/questionaires']);
  }

  delete(question: SingleSelectionQuestion) {
    this.creationEscenery.delete(question)
  }

  edit(question: SingleSelectionQuestion) {
    this.creationEscenery.edit(question)
  }

  cancelEdition(): void {
    this.creationEscenery.cancelEdition()
  }

  update(questionUpdate: SingleSelectionQuestion) {
    this.creationEscenery.update(questionUpdate)
  }

  isEdition(): boolean {
    return this.creationEscenery.isEdition;
  }

  getQuestionCreateUpdate(): SingleSelectionQuestion {
    return this.creationEscenery.questionCreateUpdate;
  }
}
