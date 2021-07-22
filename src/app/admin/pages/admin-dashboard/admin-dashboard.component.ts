import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataChartFunnelExample = {
    type: 'horizontalBar',
    data: {
      labels: ['Product views', 'Checkout', 'Purchases'],
      datasets: [
        {
          data: [2112, 343, 45],
          barPercentage: 1.24,
        },
      ],
    },
  };

}
