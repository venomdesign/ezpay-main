import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageAPComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  AutopayOff: boolean;

  constructor(private modalService: NgbModal) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  showUpdateAP() {
    console.log("Autopay Off Clicked");
    this.AutopayOff = !this.AutopayOff; 
    //manageautopay.controls['ap_account'].reset();
  }

  showAPOff() {
    console.log("Autopay Off Clicked");
    this.AutopayOff = !this.AutopayOff; 
    //manageautopay.controls['ap_account'].reset();
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Manage Autopay', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 

    // Collapse value
    this.isCollapsed = false;
  }
}
