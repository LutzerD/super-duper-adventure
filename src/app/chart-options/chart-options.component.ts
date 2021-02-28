import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from '../exchange.service';
import { Stock } from '../types/Stock';

@Component({
  selector: 'app-chart-options',
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.css'],
})
export class ChartOptionsComponent implements OnInit {
  @Input() stock: Stock = { ticker: 'ETHUSDT' };
  constructor(private exchange: ExchangeService) {}

  ngOnInit(): void {
    this.exchange.setTicker('ETHUSDT');
  }

  tickerSet(): void {
    this.exchange.setTicker(this.stock.ticker);
    console.log('set to ', this.stock.ticker);
  }
}
