import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionaire } from './questionaire.model';
import { QuestionaireService } from './questionaire.service';
import { CrudComponent } from '@common/components/crud.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionaire',
  imports: [CrudComponent],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})
export class QuestionaireComponent {
  title : string = 'Gestión de cuestionarios'
  questionaires : Observable<Questionaire[]> = of([]);
  exclusions : string[] = ['id']

  constructor(private router: Router, private readonly questionaireService: QuestionaireService){
    this.readAll();
  }

  get crudData() {
    return {
      data: this.questionaires,
      exclusions: this.exclusions
    }
  }

  readAll(): void {
    this.questionaires = this.questionaireService.readAll();
  }

  create() : void {
    this.router.navigate(['/admin/questionaires/new']);
  }

  delete(questionaire : Questionaire) : void {
    this.questionaireService.delete(questionaire.id)
      .subscribe(() => this.readAll());
  }

  edit(questionaire : Questionaire) : void  {
    this.router.navigate(['/admin/questionaires/', questionaire.id]);
  }

}
