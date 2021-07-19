import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ITicket {
  number: number;
  category: string;
  phone_number: number;
  description: string;
}

const TICKET_DATA: ITicket[] = [
  { number: 1, category: 'internet', phone_number: 254722456789, description: 'No internet' },
  { number: 2, category: 'internet', phone_number: 254722456789, description: 'No internet' },
  { number: 3, category: 'internet', phone_number: 254722456789, description: 'No internet' },
  { number: 4, category: 'internet', phone_number: 254722456789, description: 'No internet' },
];

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss']
})
export class AllTicketsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['number', 'category', 'description', 'view', 'delete'];
  dataSource = new MatTableDataSource(TICKET_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
