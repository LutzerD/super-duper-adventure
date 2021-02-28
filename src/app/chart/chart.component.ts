import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from '../exchange.service';
import { MarketChart } from '../types/MarketChart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
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
    this.source.getDataEvent().subscribe((marketChart: MarketChart) => {
      this.graph.layout.title = marketChart.stock.ticker;
      this.graph.data = marketChart.data;
      return JSON.stringify(marketChart);
    });
  }

  ngOnInit(): void {
    this.getData();
    this.source.sendData();
  }
}
