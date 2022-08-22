import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['../policy.component.scss']
})
export class DocumentsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Policy Documents', active: true }];
    this.titleService.setTitle('Policy - Policy Documents');
    // Collapse value
    this.isCollapsed = false;
  }
}
