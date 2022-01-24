import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  signupForm: FormGroup;
  submitted: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      sex: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  login(): void {
    this.router.navigateByUrl('public/auth/login');
  }

  onSubmit(): void {
    console.log(this.signupForm.controls.firstname.value);
    if(this.signupForm.valid){
    }
  }

}
