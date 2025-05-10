import { Injectable } from "@angular/core";
import { Question } from "./question.model";
import { SingleSelectionQuestion } from "./single-selection-question.model";
import { Observable, of } from "rxjs";

//@Injectable({ providedIn: 'root' })
export class NewQuestionaireService {

    items: Array<SingleSelectionQuestion> = new Array<SingleSelectionQuestion>();

    readAll(): Observable<Array<SingleSelectionQuestion>> {
        return of(this.items);
    }

    add(singleSelectionQuestion : SingleSelectionQuestion) {
        this.items.push(singleSelectionQuestion);
    }
    
    delete(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
        }
    }

    update(itemEdit: SingleSelectionQuestion, itemIpdate: SingleSelectionQuestion){
        itemEdit.description = itemIpdate.description
        itemEdit.correctOptionIndex =  itemIpdate.correctOptionIndex
        itemEdit.options[0].description = itemIpdate.options[0].description
        itemEdit.options[1].description = itemIpdate.options[1].description
        itemEdit.options[2].description = itemIpdate.options[2].description
        itemEdit.options[3].description = itemIpdate.options[3].description
    }
}