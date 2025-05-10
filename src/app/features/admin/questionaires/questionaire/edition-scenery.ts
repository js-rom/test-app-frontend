import { Injectable } from "@angular/core";
import { QuestionaireScenery } from "./Questionaire-scenery";
import { SingleSelectionQuestion } from "./single-selection-question.model";
import { Observable } from "rxjs";
import { QuestionaireService } from "../questionaires.service";
import { Question } from "./question.model";

@Injectable({
    providedIn: 'root'
})
export class EditionScenery implements QuestionaireScenery {

    questionEdit: SingleSelectionQuestion;
    questionCreateUpdate: SingleSelectionQuestion;
    isEdition = false;

    constructor(private readonly questionaireService: QuestionaireService) {
        this.questionCreateUpdate = new Question(undefined, undefined, undefined, undefined)
    }

    readAll(id: string | undefined): Observable<SingleSelectionQuestion[]> {
        return this.questionaireService.readAllBy(id);
    }

    create(question: SingleSelectionQuestion): void {
        this.questionaireService.createQuestion(question);
    }

    save(questions: SingleSelectionQuestion[]): void {
        this.questionaireService.create(questions);
    }

    delete(question: SingleSelectionQuestion): void {
        this.questionaireService.deleteQuestion(question.id)
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
        this.questionaireService.updateQuestion(this.questionEdit.id, questionUpdate)
    }

}