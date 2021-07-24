import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ITickets } from 'src/app/shared/libs/interfaces/itickets';
import { TicketsService } from 'src/app/shared/libs/services/tickets.service';


@Component({
  selector: 'app-admin-all-tickets',
  templateUrl: './admin-all-tickets.component.html',
  styleUrls: ['./admin-all-tickets.component.scss']
})
export class AdminAllTicketsComponent implements OnInit {

  displayedColumns: string[] = ['contact_email','number', 'category', 'description',"ticket_status", 'actions'];
  dataSource: any
  allTickets: any[] = [];

  constructor(private router: Router, private ticketService: TicketsService) { }

  ngOnInit(): void {
    this.getAllTickets()
  }

  viewTicket(ticket: { id: any; }){
    this.router.navigate(["admin-all-tickets", ticket.id])
  }

  getAllTickets(): void{
    this.ticketService.getTickets().subscribe(allTickets => {
      this.allTickets = allTickets.map(e => {
        const data = e.payload.doc.data() as ITickets
        return {
          id: e.payload.doc.id,
          category: data.category,
          contact: data.contact,
          description: data.description,
          contact_email: data.contact_email,
          ticket_status: data.ticket_status
        }
      })
      this.dataSource = new MatTableDataSource(this.allTickets)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
