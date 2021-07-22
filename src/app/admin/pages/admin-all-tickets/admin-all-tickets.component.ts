import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-all-tickets',
  templateUrl: './admin-all-tickets.component.html',
  styleUrls: ['./admin-all-tickets.component.scss']
})
export class AdminAllTicketsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'category', 'description',"ticket_status", 'actions'];
  dataSource: any
  allTickets: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewTicket(ticket: { id: any; }){
    this.router.navigate(["all-tickets", ticket.id])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
