import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { SingleSelectionOption } from "../single-selection-option.model";

@Injectable({providedIn: 'root'})
export class SingleSelectionQuestionService {
    
    readAllOptionsBy(id : string) : Observable<SingleSelectionOption[]> {
        return of([
            {id: '1', description: 'Descripción opcion 1'},
            {id: '2', description: 'Descripción opcion 2'},
            {id: '3', description: 'Descripción opcion 3'},
            {id: '4', description: 'Descripción opcion 4'}
        ]);
    }

}
