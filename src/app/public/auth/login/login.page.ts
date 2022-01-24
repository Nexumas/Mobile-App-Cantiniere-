import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signup(): void {
    this.router.navigateByUrl('public/auth/register');
  }

  forgotpassword(): void {
    this.router.navigate(['public/auth/forgot-password']);
  }

  onSubmit(){
    if(this.loginForm.valid){

    }
  }

}
