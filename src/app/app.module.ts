import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from  '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserInputComponent } from './user-input/user-input.component';
import { ReacticeFormsComponent } from './reactice-forms/reactice-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    UserInputComponent,
    ReacticeFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
