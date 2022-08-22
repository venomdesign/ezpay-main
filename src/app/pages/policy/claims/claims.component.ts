import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['../policy.component.scss']
})
export class ClaimsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Claims Activity', active: true }];
    this.titleService.setTitle('Policy - Claims Activity');
    // Collapse value
    this.isCollapsed = false;
  }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { size: 'md', centered: true });
  }
}
