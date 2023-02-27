import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from './UserModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userModel: UserModel = new UserModel('', '', '', '', '');

  onRegister(form: NgForm) {
    console.log('Register', UserModel);
    form.resetForm();
  }

  registerForm() {}
  ValidateWhereYouFindUs(where: string) {}
}
