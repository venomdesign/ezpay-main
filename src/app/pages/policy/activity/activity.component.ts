import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['../policy.component.scss']
})
export class ActivityComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Billing & Payment Activity', active: true }];
    this.titleService.setTitle('Policy - Policy Activity');
    // Collapse value
    this.isCollapsed = false;
  }
}
