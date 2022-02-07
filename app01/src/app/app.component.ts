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
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*
    this.formSignup?.setValue({
      userData: {
        username: suggestedName,
        email: '',
        subscriptions: 'advanced',
        password: '',
        gender: 'male',
      },
    });
    */

    this.formSignup?.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  onSubmit() {
    console.log(this.formSignup);
  }
}
