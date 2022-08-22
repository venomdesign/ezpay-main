import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-information',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Pay Online', link: '/payonline' }]; //, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Certificate of Insurance', active: true }
    this.titleService.setTitle('Policyholder - Pay Online Info');
    // Collapse value
    this.isCollapsed = false;
  }
}
