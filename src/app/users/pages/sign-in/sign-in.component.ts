import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.router.navigateByUrl("/dashboard")
  }

}
