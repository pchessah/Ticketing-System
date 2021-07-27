import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/shared/libs/services/user-auth.service';

@Component({
  selector: 'app-forgort-password',
  templateUrl: './forgort-password.component.html',
  styleUrls: ['./forgort-password.component.scss']
})
export class ForgortPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private userAuthService: UserAuthService) { }

  passwordResetForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]]
  })

  resetPassword():void{
    const email = this.passwordResetForm.value.email
    this.userAuthService.ForgotPassword(email)
  }

  ngOnInit(): void {
  }

}
