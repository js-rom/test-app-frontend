import { map, Observable, of, tap } from "rxjs";
import { QuestionaireType } from "./questionaire.model";
import { Injectable } from "@angular/core";
import { SingleSelectionQuestion } from "./questionaire/single-selection-question.model";
import { Question } from "./questionaire/question.model";
import { Option } from "./questionaire/Option.model";
import { HttpService } from "@core/services/HttpService";
import { EndPoints } from "@common/end-point";
import { Questionaire } from "./questionaire/questionaire.model";

@Injectable({ providedIn: 'root' })
export class QuestionaireService {

    constructor(private readonly httpService: HttpService) {
    }

    readAll(): Observable<QuestionaireType[]> {
        return this.httpService
            .get(EndPoints.QUESTIONAIRES);
    }

    delete(id: string): Observable<void> {
        return this.httpService
            .delete(EndPoints.QUESTIONAIRES + '/' + id);
    }

    create(questionaire: QuestionaireType): Observable<QuestionaireType> {
        return this.httpService
            .post(EndPoints.QUESTIONAIRES, questionaire);

    }

    readAllBy(id: string): Observable<Array<SingleSelectionQuestion>> {
        return this.httpService
            .get(EndPoints.QUESTIONAIRES + '/' + id + '/single-selection-questions');
    }

    createQuestion(question: SingleSelectionQuestion, questionaireId: string): Observable<SingleSelectionQuestion> {
        return this.httpService
            .post(EndPoints.QUESTIONAIRES + '/' + questionaireId, question);
    }

    deleteQuestion(questionaireId: string, id: string): Observable<void> {
        return this.httpService
            .delete(EndPoints.QUESTIONAIRES + '/' + questionaireId + '/single-selection-questions' + '/' +  id);
    }

    updateQuestion(id: string, questionUpdate: SingleSelectionQuestion): Observable<SingleSelectionQuestion> {
        return of(questionUpdate);
    }

    readDescriptionBy(id: string): Observable<string> {
        return this.httpService
            .get(EndPoints.QUESTIONAIRES + '/' + id)
            .pipe(
                map(basicQuestionaire => basicQuestionaire.description),
            );
    }
}
