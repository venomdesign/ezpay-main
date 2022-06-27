import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnotification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class CreatenotificationComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Create Account', link: '/' }, { label: 'Notification Preferences', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 

    // Collapse value
    this.isCollapsed = false;
  }
}
