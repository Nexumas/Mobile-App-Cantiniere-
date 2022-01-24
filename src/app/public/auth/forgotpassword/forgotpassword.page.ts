import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  forgotpasswordform: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.forgotpasswordform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  skip(): void{
    this.router.navigateByUrl('public/auth/login');
  }

  onSubmit(): void {

  }

}
