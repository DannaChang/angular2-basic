import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { NoticeComponent } from './user/notice/notice.component';
import { SettingComponent } from './user/setting/setting.component';
import { DomitoryComponent } from './user/domitory/domitory.component';
import { UserCenterComponent } from './user/user/user.component';
import { PersonComponent } from './user/user/person/person.component'



import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule, HttpModule,FormsModule, RouterModule.forRoot(routes)],
    declarations:   [AppComponent, LoginComponent, SignComponent,IndexComponent,
    UserComponent,NoticeComponent,SettingComponent,DomitoryComponent,UserCenterComponent,
    PersonComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}