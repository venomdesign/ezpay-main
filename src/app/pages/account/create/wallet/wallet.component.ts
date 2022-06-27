import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-createwallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class CreatewalletComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private modalService: NgbModal) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Create Account', link: '/' }, { label: 'Wallet Accounts', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 

    // Collapse value
    this.isCollapsed = false;
  }
}
