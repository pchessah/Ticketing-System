import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../libs/services/tickets.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss']
})
export class SingleTicketComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private ticketService: TicketsService,
              private location: Location) { }
  ticket: any;

  ngOnInit(): void {
    this.getSingleTicket()
  }

  goBack(): void{
    this.location.back()
  }


  getSingleTicket(): void {
    const id = this.route.snapshot.paramMap.get("id")!
    this.ticketService.getSingleTicket(id).then((ticket) => {
      ticket.subscribe((doc) => {
        this.ticket = (doc.data());
        console.log(this.ticket);
      })
    })
  }

}
