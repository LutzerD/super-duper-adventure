import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from '../exchange.service';
import { Stock } from '../Stock';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() stock: Stock = { ticker: 'BTCUSDT' };
  public graph = {
    data: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
      },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {
      xaxis: {
        type: 'date',
      },
      title: 'A Fancy Plot',
    },
  };

  data: string = '';

  constructor(private source: ExchangeService) {}

  getData(): void {
    this.source.getData().subscribe((data: any) => {
      const chartOptions = {
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'red' },
      };

      this.graph.data = data;
      console.log(this.graph.data);
      return JSON.stringify(data);
    });
  }

  ngOnInit(): void {
    this.source.setTicker('BTCUSDT');
  }

  tickerSet(): void {
    this.source.setTicker(this.stock.ticker);
  }
}
