import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    declarations:   [AppComponent, LoginComponent, SignComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}