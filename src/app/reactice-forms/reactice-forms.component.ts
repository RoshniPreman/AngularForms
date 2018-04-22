import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { states } from '../model';

// if you have multiple FormControls, you register them within a parent FormGroup

@Component({
  selector: 'app-reactice-forms',
  templateUrl: './reactice-forms.component.html',
  styleUrls: ['./reactice-forms.component.css']
})
export class ReacticeFormsComponent {

  // A FormControl constructor accepts three, optional arguments:
  //  the initial data value, an array of validators, and an array of async validators.

 heroForm : FormGroup;
 states = states;

 constructor( private fb : FormBuilder){
    this.createForm();
 }

 createForm(){
   this.heroForm = this.fb.group({
     name : [ '' , Validators.required],
     street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
   })
 }
}
