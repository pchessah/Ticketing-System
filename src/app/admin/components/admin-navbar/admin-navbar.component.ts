import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/users/libs/services/user-auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private userAuthService: UserAuthService) { }

  signOut():void{
    confirm("Are you sure you want to sign out?") ? this.userAuthService.SignOut(): undefined
  }


  ngOnInit(): void {
  }

}
