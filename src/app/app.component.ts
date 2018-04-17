import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = '';
  keyUpVal = '';

  clickMe(){
    this.clicked = "Clicked me";
  }

  onKeyUp(event : any){ // without type info
      this.keyUpVal += event.target.value + ' | '; 
  }
}
