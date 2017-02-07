import { Routes } from '@angular/router';

import { IndexRoutes } from './index/index.routes';
import { UserRoutes } from './user/user.routes';
import { LoginRoutes } from './login/login.routes';
import { SignRoutes } from './sign/sign.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
  ...IndexRoutes,
  ...UserRoutes,
  ...LoginRoutes,
  ...SignRoutes
];
