import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITickets } from 'src/app/shared/libs/interfaces/itickets';
import { NotificationService } from 'src/app/shared/libs/services/notification.service';
import { TicketsService } from 'src/app/shared/libs/services/tickets.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.scss']
})
export class RaiseTicketComponent implements OnInit {
  ticket!: ITickets;
  currentUserMail!: string;

  constructor(private router: Router,
    private fb: FormBuilder,
    private ticketService: TicketsService,
    private notificationService: NotificationService) { }

  ticketForm = this.fb.group({
    category: ["", [Validators.required]],
    description: ["", [Validators.required]],
    contact: ["", [Validators.required]]
  })

  ngOnInit(): void {
    this.getCurrentUserMail()
  }

  onSubmit(): void {
    if (confirm('Submit ticket?')) {
      this.ticket = {
        my_id: uuidv4(),
        category: this.ticketForm.value.category,
        description: this.ticketForm.value.description,
        contact: Number(this.ticketForm.value.contact),
        contact_email: this.currentUserMail,
        ticket_status: "New"
      }
      this.ticketService.createTicket(this.ticket)
      this.notificationService.sendToAdminEmail(this.ticket.my_id, this.ticket.contact_email, this.ticket.contact, this.ticket.category, this.ticket.description)
    }
  }

  getCurrentUserMail(): void {
    const currentUser = JSON.parse(localStorage.getItem("user") || '{}')
    this.currentUserMail = currentUser.email
  }

  cancel(): void {
    this.router.navigateByUrl('dashboard')
  }

}
