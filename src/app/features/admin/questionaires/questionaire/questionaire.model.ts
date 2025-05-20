import { QuestionaireType } from "../questionaire.model";
import { SingleSelectionQuestion } from "./single-selection-question.model";

export class Questionaire implements QuestionaireType{
    id: string;
    description: string;
    singleSelectionQuestions: SingleSelectionQuestion[];

}