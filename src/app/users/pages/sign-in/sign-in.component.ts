import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/shared/libs/services/user-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private fb: FormBuilder) { }

  signInForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required]]
  })

  ngOnInit(): void {
  }

  signIn(): void {
    const email = this.signInForm.value.email
    const password = this.signInForm.value.password
    this.userAuthService.SignIn(email, password)
  }

  signUpWithGoogle():void{
    this.userAuthService.GoogleAuth()
  }

}
