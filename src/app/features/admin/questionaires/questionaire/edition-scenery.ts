import { Injectable } from "@angular/core";
import { QuestionaireScenery } from "./Questionaire-scenery";
import { SingleSelectionQuestion } from "./single-selection-question.model";
import { Observable } from "rxjs";
import { QuestionaireService } from "../questionaires.service";
import { Question } from "./question.model";
import { QuestionaireType } from "../questionaire.model";

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
    getDescription(id: string): Observable<string> {
        return this.questionaireService.readDescriptionBy(id);
    }

    readAllQuestions(id: string | undefined): Observable<SingleSelectionQuestion[]> {
        return this.questionaireService.readAllBy(id);
    }

    create(question: SingleSelectionQuestion, questionaireId : string): Observable<SingleSelectionQuestion> {
        return this.questionaireService.createQuestion(question, questionaireId);
    }

    save(questionaire: QuestionaireType): Observable<QuestionaireType> {
        return this.questionaireService.create(questionaire);
    }

    delete(questionaireId: string, question: SingleSelectionQuestion): Observable<void> {
        return this.questionaireService.deleteQuestion(questionaireId, question.id)
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
    
    update(questionaireId: string, questionUpdate: SingleSelectionQuestion): Observable<SingleSelectionQuestion>  {
        this.isEdition = false;
        return this.questionaireService.updateQuestion(questionaireId, questionUpdate)
    }

}