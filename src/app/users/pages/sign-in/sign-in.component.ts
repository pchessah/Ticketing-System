import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../libs/services/user-auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userAuth: UserAuthService, private fb: FormBuilder) { }

  signInForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required]]
  })

  ngOnInit(): void {
  }

  signIn(): void {
    const email = this.signInForm.value.email
    const password = this.signInForm.value.password
    this.userAuth.SignIn(email, password)
  }

}
