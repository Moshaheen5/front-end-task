import { Component , Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [MatCardModule ],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent {
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Hourly Sales'
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  public radarChartLabels: string[] = [
    '00:00', '02:00', '04:00', '06:00',
    '08:00', '10:00', '12:00', '14:00',
    '16:00', '18:00', '20:00', '22:00'
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      {
        data: [65, 59, 90, 81, 56, 55, 40, 72, 62, 80, 50, 30],
        label: 'Store A',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
      },
      {
        data: [28, 48, 40, 19, 96, 27, 100, 45, 78, 85, 60, 40],
        label: 'Store B',
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        borderColor: 'rgba(40, 167, 69, 1)',
      }
    ]
  };

  public radarChartType: ChartType = 'radar';
}
