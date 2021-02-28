import { Stock } from './Stock';
import { ChartData } from './ChartData';

export interface MarketChart {
  stock: Stock;
  data: ChartData[];
}
