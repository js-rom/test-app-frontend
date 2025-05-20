import { Injectable } from "@angular/core";
import { NewQuestionaireService } from "./new-questionaire.service";
import { QuestionaireScenery } from "./Questionaire-scenery";
import { SingleSelectionQuestion } from "./single-selection-question.model";
import { Observable, of } from "rxjs";
import { QuestionaireService } from "../questionaires.service";
import { Question } from "./question.model";
import { QuestionaireType } from "../questionaire.model";

@Injectable()
export class CreationScenery implements QuestionaireScenery {

    questionEdit: SingleSelectionQuestion;
    questionCreateUpdate: SingleSelectionQuestion;
    isEdition = false;

    constructor(private readonly newQuestionaireService: NewQuestionaireService,
        private readonly questionaireService: QuestionaireService) {
        this.questionCreateUpdate = new Question(undefined, undefined, undefined, undefined)
    }
    getDescription(): Observable<string> {
        return of('Nuevo Cuestionario');
    }

    readAllQuestions(id: string | undefined): Observable<SingleSelectionQuestion[]> {
        return this.newQuestionaireService.readAll();
    }

    create(question: SingleSelectionQuestion, questionaireId: string): Observable<SingleSelectionQuestion> {
        this.newQuestionaireService.add(question);
        return of();

    }

    save(questionaire: QuestionaireType): Observable<QuestionaireType> {
        return this.questionaireService.create(questionaire);
    }

    delete(questionaireId: string, question: SingleSelectionQuestion): Observable<void> {
        this.newQuestionaireService.delete(question);
        return of();
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
        this.newQuestionaireService.update(this.questionEdit, questionUpdate);
        return of();
    }

}