import { Component, OnInit } from '@angular/core';
import { ITickets } from 'src/app/shared/libs/interfaces/itickets';
import { TicketsService } from 'src/app/shared/libs/services/tickets.service';
import { UserAuthService } from 'src/app/shared/libs/services/user-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public chartType: string = 'bar';


  public chartLabels: Array<any> = ['New', 'Waiting on us', 'Waiting on contact', 'Completed'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  allTickets: any[] = [];
  new!: number
  waitingOnContact!: number
  waitingOnUs!: number
  closed!: number

  public chartDatasets: Array<any> = [{ data: [this.new, this.waitingOnContact, this.waitingOnUs, this.closed], label: 'No. of tickets' }];


  constructor(private ticketService: TicketsService, private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.getTicketNumbers()
  }

  signOut(): void {
    confirm("Are you sure you want to log out?") ? this.userAuthService.SignOut() : undefined
  }

  getTicketNumbers() {
    this.ticketService.getTickets().subscribe(allTickets => {
      this.allTickets = allTickets.map(e => {
        const data = e.payload.doc.data() as ITickets
        return {
          id: e.payload.doc.id,
          my_id: data.my_id,
          category: data.category,
          contact: data.contact,
          description: data.description,
          contact_email: data.contact_email,
          ticket_status: data.ticket_status
        }
      })

      this.new = this.allTickets.filter((ticket) => ticket.ticket_status == "New").length
      this.waitingOnContact = this.allTickets.filter((ticket) => ticket.ticket_status == "Waiting on contact").length
      this.waitingOnUs = this.allTickets.filter((ticket) => ticket.ticket_status == "Waiting on us").length
      this.closed = this.allTickets.filter((ticket) => ticket.ticket_status == "Closed").length



      this.chartDatasets = [{ data: [this.new, this.waitingOnContact, this.waitingOnUs, this.closed], label: 'No. of Tickets' }]

    })
  }


}
