import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj = {
    id : '1',
    name: 'Anita'
  }

  arr = ["abc","def","ghi"];
  isTrue = false;
  myName = "Anita";
}
