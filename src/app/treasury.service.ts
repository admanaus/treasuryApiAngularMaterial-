import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class TreasuryService {

  constructor(private _http: HttpClient) { }

  url: string = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange"

  getTreasuryCurrencyData(){

    return this._http.get(this.url).pipe(
      map((response: any) => {
        let countries: Country[] = [];
        response.data.forEach((country: any) => {
          countries.push(({
            date: country.record_date,
            name: country.country,
            currency: country.currency,
            exchangeRate: country.exchange_rate
          } as Country))
        });
        return countries;
      })
    )
  }

}
