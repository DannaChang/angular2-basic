import { Route } from '@angular/router';

import { UserComponent } from './user.component';
import { NoticeComponent } from './notice/notice.component';
import { NoticeRoutes } from './notice/notice.routes';
import { UserCenterRoutes } from './user/user.routes';
import { SettingRoutes } from './setting/setting.routes';
import { DomitoryRoutes } from './domitory/domitory.routes';
import { PersonRoutes } from './user/person/person.routes';
import { NewDomitoryRoutes } from './domitory/newDomitory/newdomitory.routes';
const appChildRoutes: Route[] = [
     // 如果地址栏中输入没有定义的路由就跳转到notice路由界面
    {
      path: '',redirectTo: 'notice'
    },
    ...NoticeRoutes,
    ...UserCenterRoutes,
    ...SettingRoutes,
    ...DomitoryRoutes,
    ...PersonRoutes,
    ...NewDomitoryRoutes
]
export const UserRoutes: Route[] = [
    {
        path: 'user',
        component: UserComponent,
        children:appChildRoutes
    }
];

