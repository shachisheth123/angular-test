import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './app.route';
import { WelcomeComponent } from './welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseModule } from './course/course.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    UserModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
