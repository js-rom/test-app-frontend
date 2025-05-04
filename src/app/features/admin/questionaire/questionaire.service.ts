import { Observable, of } from "rxjs";
import { Questionaire } from "./questionaire.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class QuestionaireService {
    
    readAll() : Observable<Questionaire[]> {
        return of([
            {id: '1', description: 'cuestionario 1'},
            {id: '2', description: 'cuestionario 2'},
            {id: '3', description: 'cuestionario 3'},
            {id: '4', description: 'cuestionario 4'},
            {id: '5', description: 'cuestionario 5'},
        ]);
    }

    delete() {

    }
}
