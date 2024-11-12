import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [],
  templateUrl: './sales-chart.component.html',
  styleUrl: './sales-chart.component.css'
})
export class SalesChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Chart('salesChart', {
      type: 'radar',
      data: {
        labels: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22'],
        datasets: [{
          label: 'Hourly Sales',
          data: [12, 19, 3, 5, 2, 3, 10, 15, 6, 8, 12, 10],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 20
          }
        }
      }
    });
  }

}
