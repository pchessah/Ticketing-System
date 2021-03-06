import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ITickets } from 'src/app/shared/libs/interfaces/itickets';
import { TicketsService } from 'src/app/shared/libs/services/tickets.service';


@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss']
})
export class AllTicketsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'category', 'description',"ticket_status", 'actions'];
  dataSource: any
  allTickets: any[] = [];
  currentUserMail!: string;


  constructor(private router: Router, private ticketService: TicketsService,) { }

  ngOnInit(): void {
    this.getAllTickets()
    this.getCurrentUserMail()    
  }


  viewTicket(ticket: { id: any; }){
    this.router.navigate(["all-tickets", ticket.id])
  }

  deleteTicket(ticket: { id: string | undefined; }) :void{
    confirm("Would you like to delete this ticket?") ? this.ticketService.deleteTicket(ticket) : undefined
  }

  getCurrentUserMail(): void {
    const currentUser = JSON.parse(localStorage.getItem("user") || '{}')
    this.currentUserMail = currentUser.email
  }

  getAllTickets(): void {
    this.ticketService.getTickets().subscribe(allTickets => {
      this.allTickets = allTickets.map(e => {
        const data = e.payload.doc.data() as ITickets
        return {
          id: e.payload.doc.id,
          my_id: data.my_id,
          category: data.category,
          contact: data.contact,
          description: data.description,
          contact_email: data.contact_email,
          ticket_status: data.ticket_status
        }
      }).filter((ticket) => {
        return ticket.contact_email == this.currentUserMail
      })
      this.dataSource = new MatTableDataSource(this.allTickets)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
