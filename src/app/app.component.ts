import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string="";
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
}
