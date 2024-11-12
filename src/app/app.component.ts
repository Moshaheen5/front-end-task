// src/app/app.component.ts
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SalesChartComponent } from './components/sales-chart/sales-chart.component';
import { StationCardComponent } from './components/station-card/station-card.component';
import { StationListComponent } from './components/station-list/station-list.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatSidenavModule,NavbarComponent,SideNavComponent ,RadarChartComponent,MatToolbarModule, MatCardModule,  MatIconModule,SalesChartComponent,StationCardComponent,StationListComponent,SummaryCardComponent], // Angular Material modules imported here
})
export class AppComponent {}
