import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const router : Routes =  [
  {path : '' , redirectTo : '/userinput' , pathMatch : 'full'},
  {path : 'userinput' , component :UserInputComponent  },
  { path : 'templatedriven' , component : TemplateDrivenComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports : [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
