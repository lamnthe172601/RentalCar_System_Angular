import { Routes } from '@angular/router';
import { LogoutComponent } from '../views/logout/logout.component';
import { AccessDeniedComponent } from '../views/access-denied/access-denied.component';
import { RegisterComponent } from '../views/register/register.component';
import { LoginComponent } from '../views/login/login.component';

export const routes: Routes = [   
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },  
    { path: 'logout', component: LogoutComponent },  
    { path: 'access-denied', component: AccessDeniedComponent },
    { path: '', redirectTo : "/home",pathMatch: 'full' },
    { path: '**', redirectTo : "/login" },
];
