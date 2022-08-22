import { Component, OnInit } from '@angular/core';

import { Price } from './pricing.model';

import { pricingData } from './data';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  pricingData: Price[];

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Pricing', active: true }];
    this.titleService.setTitle('Venomdesign - Pricing');
    this._fetchData();
  }

  private _fetchData() {
    this.pricingData = pricingData;
  }

}
