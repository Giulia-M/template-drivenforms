import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app01';
  defaultQuestion = 'advanced';
  userData = '';
  @ViewChild('formDisplay') formSignup: NgForm | undefined;

  genders = ['male', 'female'];
  onSubmit() {
    console.log(this.formSignup);
  }
}
