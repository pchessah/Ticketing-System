import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { TicketsService } from 'src/app/shared/libs/services/tickets.service';

@Component({
  selector: 'app-admin-single-ticket',
  templateUrl: './admin-single-ticket.component.html',
  styleUrls: ['./admin-single-ticket.component.scss']
})
export class AdminSingleTicketComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private ticketService: TicketsService,
              private location: Location,
              private fb: FormBuilder) { }

  ticket: any;
  ticketStatusForm = this.fb.group({
    ticketStatus: [""]
  })

  ngOnInit(): void {
    this.getSingleTicket()
  }

  getSingleTicket(): void {
    const id = this.route.snapshot.paramMap.get("id")!
    this.ticketService.getSingleTicket(id).then((ticket) => {
      ticket.subscribe((doc) => {
        this.ticket = (doc.data());
      })
    })
  }

  goBack(): void {
    this.location.back()
  }

  changeTicketStatus():void{
    console.log(this.ticketStatusForm.value.ticketStatus);
  }

}
