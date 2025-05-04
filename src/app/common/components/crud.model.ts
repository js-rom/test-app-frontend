import { Observable } from "rxjs";

export interface CrudData {
    data: Observable<any[]>, 
    exclusions : string[]
}