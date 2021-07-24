import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/shared/libs/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private userAuthService: UserAuthService ) { }

  signOut():void{
    confirm("Are you sure you want to sign out?") ? this.userAuthService.SignOut(): undefined
  }

  ngOnInit(): void {
  }

}
