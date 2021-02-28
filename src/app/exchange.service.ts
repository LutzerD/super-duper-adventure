import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MarketData } from 'src/MarketData';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}
  private ticker: string = 'BTCUSDT';

  getData(): Observable<MarketData[]> {
    console.log('going to api?');
    return this.http.get<MarketData[]>(
      `http://localhost:8080/api/historicalData?symbol=${this.ticker}`
    );
  }

  setTicker(ticker: string): void {
    this.ticker = ticker;
  }
}
