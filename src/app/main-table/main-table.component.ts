import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { TreasuryService } from '../treasury.service';


@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})

export class MainTableComponent implements OnInit {

  currency_data: Country[] = [];
  displayedColumns: string[] = ['name', 'currency', 'exchange rate'];

  constructor(private treasuryService: TreasuryService) { }

  ngOnInit(): void {

    this.treasuryService.getTreasuryCurrencyData().subscribe(data => {
      console.log(data);
      this.currency_data = data;
    })
  }

}
