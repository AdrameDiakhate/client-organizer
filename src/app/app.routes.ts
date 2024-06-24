import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { TaskComponent } from './task/task.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        "path": "signin",
        "component": SigninComponent
    },
    {
        "path": "signup",
        component: SignupComponent
    },
    {
        "path": "workspace",
        component: WorkspaceComponent
    },
    {
        "path": "task",
        component: TaskComponent
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }, 

];
