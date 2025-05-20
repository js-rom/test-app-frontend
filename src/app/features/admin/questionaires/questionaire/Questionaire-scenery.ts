import { Observable } from "rxjs";
import { SingleSelectionQuestion } from "./single-selection-question.model";
import { QuestionaireType } from "../questionaire.model";

export interface QuestionaireScenery {
    getDescription(id: string): Observable<string>;
    //id: string;
    questionEdit: SingleSelectionQuestion;
    questionCreateUpdate: SingleSelectionQuestion
    isEdition: boolean;
    readAllQuestions(id: string | undefined): Observable<any[]>
    create(question: SingleSelectionQuestion, questionaireId : string): Observable<SingleSelectionQuestion>
    save(questionaire: QuestionaireType): Observable<QuestionaireType>
    delete(questionaireId: string, question: SingleSelectionQuestion): Observable<void>
    cancelEdition(): void
    edit(question: SingleSelectionQuestion): void
    cancelEdition(): void
    update(questionaireId: string, questionUpdate: SingleSelectionQuestion): Observable<SingleSelectionQuestion> 
}