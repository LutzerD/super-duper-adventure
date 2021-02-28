import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from '../exchange.service';
import { Stock } from '../Stock';

@Component({
  selector: 'app-chart-options',
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.css'],
})
export class ChartOptionsComponent implements OnInit {
  @Input() stock: Stock = { ticker: 'BTCUSDT' };
  constructor(private exchange: ExchangeService) {}

  ngOnInit(): void {}
}
