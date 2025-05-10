import { Injectable } from "@angular/core";
import { NewQuestionaireService } from "./new-questionaire.service";
import { QuestionaireScenery } from "./Questionaire-scenery";
import { SingleSelectionQuestion } from "./single-selection-question.model";
import { Observable } from "rxjs";
import { QuestionaireService } from "../questionaires.service";
import { Question } from "./question.model";

@Injectable()
export class CreationScenery implements QuestionaireScenery {

    questionEdit: SingleSelectionQuestion;
    questionCreateUpdate: SingleSelectionQuestion;
    isEdition = false;

    constructor(private readonly newQuestionaireService: NewQuestionaireService,
        private readonly questionaireService: QuestionaireService) {
        this.questionCreateUpdate = new Question(undefined, undefined, undefined, undefined)
    }

    readAll(): Observable<SingleSelectionQuestion[]> {
        return this.newQuestionaireService.readAll();
    }

    create(question: SingleSelectionQuestion): void {
        this.newQuestionaireService.add(question);
    }

    save(questions: SingleSelectionQuestion[]): void {
        this.questionaireService.create(questions);
    }

    delete(question: SingleSelectionQuestion): void {
        this.newQuestionaireService.delete(question)
    }


    edit(question: SingleSelectionQuestion): void {
        this.questionEdit = question;
        this.questionCreateUpdate = JSON.parse(JSON.stringify(question))
        this.isEdition = true;
    }

    cancelEdition(): void {
        this.isEdition = false;
        this.questionCreateUpdate = new Question(undefined, undefined, undefined, undefined)
    }
    update(questionUpdate: SingleSelectionQuestion): void {
        this.isEdition = false;
        this.newQuestionaireService.update(this.questionEdit, questionUpdate)
    }

}