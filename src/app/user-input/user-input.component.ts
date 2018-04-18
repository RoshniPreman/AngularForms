import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clicked = '';
  keyUpVal = '';

  clickMe(){
    this.clicked = "Clicked me";
  }

  onKeyUp(event : any){ // without type info
      this.keyUpVal += event.target.value + ' | '; 
  }

  heroes = [];

  addHero(value : string){
    if(value){
      this.heroes.push(value);
    }
   
  }
}
