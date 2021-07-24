import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { ITickets } from '../interfaces/itickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private firestore: AngularFirestore, private router: Router) { }
  ticketsCollection = this.firestore.collection("tickets")

  //CREATE NEW TICKET
  createTicket(ticket: ITickets) {
    return new Promise<any>((resolve, reject) => {
      this.ticketsCollection
        .add(ticket)
        .then(res => { }, err => reject(err))
        .then(() => {
          window.alert("Ticket saved!")
          this.router.navigateByUrl("all-tickets")
        })
    })
  }

  //GET ALL TICKETS
  getTickets() {
    return this.ticketsCollection.snapshotChanges();
  }

  //GET SINGLE TICKET
  async getSingleTicket(id: string | undefined) {
    return this.ticketsCollection.doc(id).get()
  }

  //DELETE SINGLE TICKET
  deleteTicket(ticket: { id: string | undefined; }) {
    return this.ticketsCollection.doc(ticket.id)
      .delete().then(() => {
        window.alert("Ticket deleted")
      })
  }

  //UPDATE TICKET STATUS BY ADMIN
  async changeTicketStatus(id: string | undefined, newTicketStatus: string) {
    const specificTicket = this.ticketsCollection.doc(id)
    return await specificTicket.set({
      ticket_status: newTicketStatus
    }, {merge: true})
  }
}
