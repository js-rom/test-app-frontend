import { Injectable } from "@angular/core";
import { Question } from "./question.model";
import { SingleSelectionQuestion } from "./single-selection-question.model";

@Injectable({ providedIn: 'root' })
export class NewQuestionaireService {

    items: Array<SingleSelectionQuestion> = new Array<SingleSelectionQuestion>();

    readAll(): Array<SingleSelectionQuestion> {
        return this.items;
    }

    add(singleSelectionQuestion : SingleSelectionQuestion) {
        this.items.push(singleSelectionQuestion);
    }
    
}