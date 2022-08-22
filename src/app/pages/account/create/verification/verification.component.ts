import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-verify',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerifyComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title, private modalService: NgbModal) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Email Validation', link: '/' }]; //, { label: 'Manage Wallet Accounts', active: true }{ label: 'Policy GL 1040086B', link: '/policy' }, 
    this.titleService.setTitle('Create - Email Validation');
    // Collapse value
    this.isCollapsed = false;
  }
}
