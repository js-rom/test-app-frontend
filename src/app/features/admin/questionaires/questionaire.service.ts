import { Observable, of } from "rxjs";
import { Questionaire } from "./questionaire.model";
import { Injectable } from "@angular/core";
import { SingleSelectionQuestion } from "./new-questionaire/single-selection-question.model";

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

}
