import { SingleSelectionOption } from "./single-selection-option.model";
import { Option } from "./Option.model";
import { SingleSelectionQuestion } from "./single-selection-question.model";

export class Question implements SingleSelectionQuestion {

    id: string;
    description: string;
    correctOptionId?: string;
    correctOptionIndex?: number;
    options: Array<SingleSelectionOption>;
    MAX_OPTIONS = 4;

    constructor(id: string, description: string, correctOptionId: string, options: Array<SingleSelectionOption>) {
        this.id = id;
        this.description = description;
        this.correctOptionId = correctOptionId;
        this.options ? options : this.addOptions();
    }

    addOption(singleSelectionOption: SingleSelectionOption) {
        this.options.push(singleSelectionOption)
    }

    addOptions() {
        this.options = new Array<SingleSelectionOption>()
        for (let i = 0; i < this.MAX_OPTIONS; i++) {
            this.addOption(new Option())
        }
    }

}