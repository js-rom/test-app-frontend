import { SingleSelectionOption } from "./single-selection-option.model";

export class Option implements SingleSelectionOption {

    id?: string;
    description: string;

    constructor(id: string, description: string) {
        this.id = id;
        this.description = description;
    }

}