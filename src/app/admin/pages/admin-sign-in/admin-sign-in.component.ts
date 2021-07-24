import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/shared/libs/services/user-auth.service';



@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent implements OnInit {
  
  constructor(  private fb: FormBuilder, private router: Router, private userAuthService: UserAuthService) { }

  adminSignInForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required]]
  })

  signIn(): void {
    const email = this.adminSignInForm.value.email
    const password = this.adminSignInForm.value.password
    this.userAuthService.AdminSignIn(email, password)
  }

  ngOnInit(): void {
  }

}
