import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITickets } from '../../libs/interfaces/itickets';
import { TicketsService } from '../../libs/services/tickets.service';



const TICKET_DATA: ITickets[] = [];

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss']
})
export class AllTicketsComponent implements OnInit {
  
  allTickets:any[] = [];
  constructor(private ticketService: TicketsService ) { }

  ngOnInit(): void {
    this.getAllTickets()
  }

  getAllTickets(){
    this.ticketService.getTickets().subscribe(allTickets =>{
      this.allTickets = allTickets.map(e =>{
        const data = e.payload.doc.data() as  ITickets
        return{
          id: e.payload.doc.id,
          category:data.category,
          contact:data.contact,
          description:data.description
        } 
      })  
      this.dataSource= new MatTableDataSource(this.allTickets) 
    })
  }

  displayedColumns: string[] = ['number', 'category', 'description', 'view', 'delete'];
  dataSource: any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
