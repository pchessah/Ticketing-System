import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/shared/libs/services/user-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( ) { }


  ngOnInit(): void {  }

}
