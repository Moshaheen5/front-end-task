import { Component } from '@angular/core';
import { SummaryCardComponent } from '../summary-card/summary-card.component';
import { StationCardComponent } from '../station-card/station-card.component';
import { StationListComponent } from '../station-list/station-list.component';
import { SalesChartComponent } from '../sales-chart/sales-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SummaryCardComponent,
    StationCardComponent,
    StationListComponent,
    SalesChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
