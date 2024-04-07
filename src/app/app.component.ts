import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salts';

  options = ['Daily', 'Weekly', 'Monthly'];

  handleIndexChange(e: number): void {
    console.log(e);
  }
}
