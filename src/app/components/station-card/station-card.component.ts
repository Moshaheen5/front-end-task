import { Component ,Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [MatCardModule ],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.css'
})
export class StationCardComponent {
  @Input() stationName: string = 'Dummy';
  @Input() totalSales: string = '3265 m';
  @Input() totalValue: string = '16500 EGP';
  @Input() compressionState: string = 'comperssion';
  @Input() maxTransactionPerHour: string = '17';
  @Input() MaxTransactionDatetime: string = '8-1-2021 / 10:16PM';
  @Input() totalTransactioncount: string = ' 5161';

}
