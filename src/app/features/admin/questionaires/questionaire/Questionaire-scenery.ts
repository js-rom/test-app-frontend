import { Observable } from "rxjs";
import { SingleSelectionQuestion } from "./single-selection-question.model";

export interface QuestionaireScenery {
    //id: string;
    questionEdit: SingleSelectionQuestion;
    questionCreateUpdate: SingleSelectionQuestion
    isEdition: boolean;
    readAll(id: string | undefined): Observable<any[]>
    create(question: SingleSelectionQuestion): void
    save(questions: SingleSelectionQuestion[]): void
    delete(question: SingleSelectionQuestion): void
    cancelEdition(): void
    update(questionUpdate: SingleSelectionQuestion): void
    edit(question: SingleSelectionQuestion): void
    cancelEdition(): void
    update(questionUpdate: SingleSelectionQuestion): void
}