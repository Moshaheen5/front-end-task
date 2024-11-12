import { Component } from '@angular/core';
import { StationCardComponent } from '../station-card/station-card.component';

@Component({
  selector: 'app-station-list',
  standalone: true,
  imports: [StationCardComponent],
  templateUrl: './station-list.component.html',
  styleUrl: './station-list.component.css'
})
export class StationListComponent {

}
