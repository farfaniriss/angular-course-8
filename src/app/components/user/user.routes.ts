import { Routes } from '@angular/router';

import { UserDetailComponent } from "./user-detail.component";
import { UserEditComponent } from "./user-edit.component";
import { UserNewComponent } from "./user-new.component";


export const USER_ROUTES: Routes = [
    { path: 'detail', component: UserDetailComponent }, 
    { path: 'edit', component: UserEditComponent },
    { path: 'new', component: UserNewComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new' }
  ];

