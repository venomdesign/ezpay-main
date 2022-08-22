import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-coverages',
  templateUrl: './coverages.component.html',
  styleUrls: ['../policy.component.scss']
})
export class CoveragesComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Insurance Coverage', active: true }];
    this.titleService.setTitle('Policy - Coverages');
    // Collapse value
    this.isCollapsed = false;
  }
}
