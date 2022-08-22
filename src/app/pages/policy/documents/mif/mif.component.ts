import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-mif',
  templateUrl: './mif.component.html',
  styleUrls: ['../../policy.component.scss']
})
export class MifComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Material Information Form', active: true }];
    this.titleService.setTitle('Policy - Material Information Form');
    // Collapse value
    this.isCollapsed = false;
  }
}
