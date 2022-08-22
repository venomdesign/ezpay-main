import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['../policy.component.scss']
})
export class HolderComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Policy Holder Information', active: true }];
    this.titleService.setTitle('Policy - Policy Holder Information');
    // Collapse value
    this.isCollapsed = false;
  }
}
