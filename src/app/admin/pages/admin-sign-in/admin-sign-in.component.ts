import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent implements OnInit {
  
  constructor(  private fb: FormBuilder, private router: Router) { }

  adminSignInForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required]]
  })

  signIn(): void {
    const email = this.adminSignInForm.value.email
    const password = this.adminSignInForm.value.password
    this.router.navigateByUrl("admin-dashboard")
    // this.userAuthService.SignIn(email, password)
  }

  ngOnInit(): void {
  }

}
