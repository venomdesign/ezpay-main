import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

/**
 * UI-cards component
 */
export class CardsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Cards', active: true }];
    this.titleService.setTitle('Venomdesign - Cards');
  }
}
