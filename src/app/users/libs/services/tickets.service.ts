import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { ITickets } from '../interfaces/itickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor( private firestore: AngularFirestore, private router: Router) { }

  createTicket(ticket: ITickets){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("tickets")
                    .add(ticket)
                    .then(res => {}, err => reject(err))
                    .then(()=>{
                      window.alert("Ticket saved!")
                      this.router.navigateByUrl("all-tickets")
                    })
    })
  }

  getTickets(){
    return this.firestore.collection("tickets").snapshotChanges();
  }
  
  async getSingleTicket(id: string | undefined){
    return this.firestore.collection("tickets").doc(id).get()   
  }

  deleteTicket(ticket: { id: string | undefined; }){
    return this.firestore.collection("tickets")
                          .doc(ticket.id)
                          .delete().then(()=>{
                            window.alert("Ticket deleted")
                          })
  }
}
