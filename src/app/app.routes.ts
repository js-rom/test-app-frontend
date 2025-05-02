import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home/wellcome' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'wellcome', component: WellcomeComponent }, // PUBLIC
        ]
    },
    {
        path: 'admin', component: AdminComponent,
        children: []
    }
];
