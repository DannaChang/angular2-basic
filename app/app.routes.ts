import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { SignRoutes } from './sign/sign.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/sign',
        pathMatch: 'full'
    },
  ...LoginRoutes,
  ...SignRoutes
];
