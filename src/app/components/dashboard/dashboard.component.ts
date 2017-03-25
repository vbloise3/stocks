/**
 * Created by vincebloise on 3/25/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  stocks: Array<StockInterface>;
  symbols: Array<string>;
  subscription: any;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.subscription = this.service.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks.json());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
