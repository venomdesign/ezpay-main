import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['../policy.component.scss']
})
export class HistoryComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Policy History', active: true }];
    this.titleService.setTitle('Policy - Policy History');
    // Collapse value
    this.isCollapsed = false;
  }
}
