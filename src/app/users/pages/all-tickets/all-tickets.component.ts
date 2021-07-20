import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITickets } from '../../libs/interfaces/itickets';
import { TicketsService } from '../../libs/services/tickets.service';


@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss']
})
export class AllTicketsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'category', 'description', 'view', 'delete'];
  dataSource: any
  allTickets: any[] = [];
  currentUserMail!: string;

  constructor(private ticketService: TicketsService) { }

  ngOnInit(): void {
    this.getAllTickets()
    this.getCurrentUserMail()
  }

  getCurrentUserMail(): void {
    const currentUser = JSON.parse(localStorage.getItem("user") || '{}')
    this.currentUserMail = currentUser.email
  }

  getAllTickets() {
    this.ticketService.getTickets().subscribe(allTickets => {
      this.allTickets = allTickets.map(e => {
        const data = e.payload.doc.data() as ITickets
        return {
          id: e.payload.doc.id,
          category: data.category,
          contact: data.contact,
          description: data.description,
          contact_email: data.contact_email
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
