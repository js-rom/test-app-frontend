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
    this.questionaires = questionaireService.readAll();
  }

  get crudData() {
    return {
      data: this.questionaires,
      exclusions: this.exclusions
    }
  }

  create() {
    this.router.navigate(['/admin/questionaires/new']);
  }

}
