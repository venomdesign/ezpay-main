import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private titleService: Title, private modalService: NgbModal) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Pay Online', link: '/payonline' }, { label: 'Payment Method', active: true }]; //, { label: 'Policy GL 1040086B', link: 'policy' }, { label: 'Certificate of Insurance', active: true }
    this.titleService.setTitle('Policyholder - Pay Online');
    // Collapse value
    this.isCollapsed = false;
  }

  /**
   * Modal Open
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'xl' });
  }
}
