import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['../../policy.component.scss']
})
export class EvidenceComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Evidence of Property', active: true }];
    this.titleService.setTitle('Policy - Evidence of Property');
    // Collapse value
    this.isCollapsed = false;
  }
}
