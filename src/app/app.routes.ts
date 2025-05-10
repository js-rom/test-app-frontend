import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WellcomeComponent } from './features/home/wellcome/wellcome.component';
import { AdminComponent } from './features/admin/admin.component';
import { QuestionairesComponent } from './features/admin/questionaires/questionaires.component';
import { QuestionaireComponent } from './features/admin/questionaires/questionaire/questionaire.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home/wellcome' },
    {
        path: 'home', loadComponent: () => import('./features/home/home.component')
            .then(component => component.HomeComponent),
        children: [
            { path: 'wellcome', component: WellcomeComponent }, // PUBLIC
        ]
    },
    {
        path: 'admin', loadComponent: () => import('./features/admin/admin.component')
        .then(component => component.AdminComponent),
        children: [
            { path: 'questionaires', component: QuestionairesComponent },
            { path: 'questionaires/new', component: QuestionaireComponent },
            { path: 'questionaires/:id', component: QuestionaireComponent }
        ]
    }
];
