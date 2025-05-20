import { SingleSelectionQuestion } from "./questionaire/single-selection-question.model";

export interface QuestionaireType {
    id: string;
    description: string;
    singleSelectionQuestions: SingleSelectionQuestion[];
}
