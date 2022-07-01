import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollAPComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  noselection: boolean;
  
  constructor(private modalService: NgbModal, public formBuilder: UntypedFormBuilder) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  Errorselection() {
    console.log("Autopay Off Clicked");
    this.noselection = !this.noselection; 
    //manageautopay.controls['ap_account'].reset();
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Enroll In Autopay', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 

    // Collapse value
    this.isCollapsed = false;
  }
}
