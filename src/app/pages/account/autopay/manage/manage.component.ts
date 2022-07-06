import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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
  //AutopayOff: boolean;

  constructor(private modalService: NgbModal, public router: Router) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  // showUpdateAP() {
  //   //console.log("Autopay Off Clicked");
  //   //this.AutopayOff = !this.AutopayOff; 
  //   this.router.navigateByUrl('/'); //, { state: { data:'showAutopayUpdated' } }
  //   //manageautopay.controls['ap_account'].reset();
  // }

  // showAPOff() {
  //   //console.log("Autopay Off Clicked");
  //   //this.AutopayOff = !this.AutopayOff; 
  //   this.router.navigateByUrl('/'); //, { state: { data:'showAutopayRemoved' } }
  //   //manageautopay.controls['ap_account'].reset();
  // }

  showUpdateAP() {
    this.router.navigateByUrl('/', { state: { data:'showAutopayUpdated' } });
  }
  showAPOff() {
    this.router.navigateByUrl('/', { state: { data:'showAutopayRemoved' } });
  }



  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Manage Autopay', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 

    // Collapse value
    this.isCollapsed = false;
  }
}
