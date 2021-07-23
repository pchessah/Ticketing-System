import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/users/libs/services/user-auth.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss']
})
export class AdminSignUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private userAuthService: UserAuthService) { }

  adminSignUpForm = this.fb.group({
    email:["", [Validators.email, Validators.required]]
  })

  ngOnInit(): void {
  }

  makeAdmin(){

    const email = this.adminSignUpForm.value.email
    this.userAuthService.makeAdmin(email)
   
  }

}
