import { Routes } from '@angular/router';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    }
];
