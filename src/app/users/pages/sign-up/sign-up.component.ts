import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/shared/libs/services/user-auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor( private userAuthService: UserAuthService, private fb: FormBuilder) { }

  signUpForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required]],
    password2: ["", [Validators.required]]
  })

  signUp(): void{
    const email = this.signUpForm.value.email
    const password = this.signUpForm.value.password
    const password2 = this.signUpForm.value.password2
    password ===  password2 ? this.userAuthService.SignUp(email, password) : window.alert("Passwords do not match! Kindly enter again")    
  }

  signUpWithGoogle(): void{
    this.userAuthService.GoogleAuth()
  }

  ngOnInit(): void {
  }

}
