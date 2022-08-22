import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Pay Online', link: '/payonline' }, { label: 'Payment Confirmation', active: true }]; //, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Certificate of Insurance', active: true }
    this.titleService.setTitle('Policyholder - Pay Online Confirmation');
    // Collapse value
    this.isCollapsed = false;
  }
}
