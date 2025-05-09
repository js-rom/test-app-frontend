import { SingleSelectionOption } from "./single-selection-option.model";

export interface SingleSelectionQuestion {
    id : string,
    description: string,
    correctOptionId?: string;
    correctOptionIndex?: number;
    options: SingleSelectionOption[];
    addOption(singleSelectionOption : SingleSelectionOption);
}