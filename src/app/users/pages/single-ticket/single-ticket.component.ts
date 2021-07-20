import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITickets } from '../../libs/interfaces/itickets';
import { TicketsService } from '../../libs/services/tickets.service';


@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss']
})
export class SingleTicketComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private location: Location,
    private ticketService: TicketsService) {
   
  }

  ngOnInit(): void {
    this.getSingleTicket()

  }
  ticket: any;

  getSingleTicket(): void {
    const id = this.route.snapshot.paramMap.get("id")!
    this.ticketService.getSingleTicket(id).then((ticket) => {
      ticket.subscribe((doc) => {
       this.ticket = (doc.data()); 
      })
    })
  }

}
