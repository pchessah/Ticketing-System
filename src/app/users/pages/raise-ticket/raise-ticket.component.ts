import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITickets } from '../../libs/interfaces/itickets';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.scss']
})
export class RaiseTicketComponent implements OnInit {
  ticket!: ITickets;

  constructor( private router: Router, private fb: FormBuilder, ) { }


  ticketForm = this.fb.group({
    category: ["",[Validators.required]],
    description: ["",[Validators.required]],
    contact:["", [Validators.required]]
  })

  ngOnInit(): void {
  }

  onSubmit():void{
    if(confirm('Submit ticket?')){
      this.ticket = {
        my_id: uuidv4(),
        category: this.ticketForm.value.category,
        description: this.ticketForm.value.description,
        contact: Number(this.ticketForm.value.contact)
      }
    }
   

  }

  cancel(): void{
    this.router.navigateByUrl('dashboard')
  }

}
