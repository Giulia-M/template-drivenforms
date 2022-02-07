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

  user = {
    username: '',
    email: '',
    subscriptions: '',
    password: '',
    gender: '',
  };
  submitted = false;
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
    // console.log(this.formSignup);
    this.submitted = true;
    this.user.username = this.formSignup?.value.userData.username;
    this.user.email = this.formSignup?.value.userData.email;
    this.user.subscriptions = this.formSignup?.value.userData.subscriptions;
    this.user.gender = this.formSignup?.value.userData.gender;
    this.formSignup?.reset();
  }
}
