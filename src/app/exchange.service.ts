import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MarketChart } from './types/MarketChart';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}
  private ticker: string = 'BTCUSDT';
  private subject = new Subject<MarketChart>();

  getDataEvent(): Observable<MarketChart> {
    return this.subject.asObservable();
  }

  sendData() {
    const market: Observable<MarketChart> = this.http.get<MarketChart>(
      `http://localhost:8080/api/historicalData?symbol=${this.ticker}`
    );
    market.subscribe((chart) => this.subject.next(chart));
  }

  setTicker(ticker: string): void {
    this.ticker = ticker;
    this.sendData();
  }
}
