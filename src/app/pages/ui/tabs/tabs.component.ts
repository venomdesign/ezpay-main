import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

/**
 * UI-tabs component
 */
export class TabsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Tabs & Accordions', active: true }];
    this.titleService.setTitle('Venomdesign - Tabs');
    // Collapse value
    this.isCollapsed = false;
  }
}
