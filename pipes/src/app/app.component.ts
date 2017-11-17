import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'anita';
  date = new Date(1984,4,13);
  arr = [4,7,2,8,4];
}
