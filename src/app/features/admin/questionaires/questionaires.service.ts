import { Observable, of } from "rxjs";
import { Questionaire } from "./questionaire.model";
import { Injectable } from "@angular/core";
import { SingleSelectionQuestion } from "./questionaire/single-selection-question.model";
import { Question } from "./questionaire/question.model";
import { Option } from "./questionaire/Option.model";

@Injectable({ providedIn: 'root' })
export class QuestionaireService {

    readAll(): Observable<Questionaire[]> {
        return of([
            { id: '1', description: 'cuestionario 1' },
            { id: '2', description: 'cuestionario 2' },
            { id: '3', description: 'cuestionario 3' },
            { id: '4', description: 'cuestionario 4' },
            { id: '5', description: 'cuestionario 5' },
        ]);
    }

    delete(id: string): Observable<void> {
        /*      return this.httpService
               .delete(EndPoints.QUESTIONAIRES + '/' + id); */
        return of();
    }

    create(questions: Array<SingleSelectionQuestion>): Observable<Questionaire> {
        /*      return this.httpService
               .post(EndPoints.QUESTIONAIRES, questions); */
        return of({ id: '6', description: 'cuestionario 6' });
    }

    readAllBy(id: string): Observable<Array<SingleSelectionQuestion>> {
        const options = [
            new Option('1', 'descripcion 1'),
            new Option('2', 'descripcion 2'),
            new Option('3', 'descripcion 3'),
            new Option('4', 'descripcion 4'),]
        return of([
            new Question('1', 'Pregunta 1', 1, options),
            new Question('2', 'Pregunta 2', 2, undefined)
        ]);
    }

    createQuestion(question: SingleSelectionQuestion): Observable<SingleSelectionQuestion> {
        return of(question);
    }

    deleteQuestion(id: string): Observable<void> {
        return of();
    }

    updateQuestion(id: string, questionUpdate: SingleSelectionQuestion): Observable<SingleSelectionQuestion> {
        return of(questionUpdate);
    }
}
