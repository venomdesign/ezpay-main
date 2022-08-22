import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  
  constructor(private titleService: Title, private modalService: NgbModal, public formBuilder: UntypedFormBuilder, public router: Router) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  accountNumber: string;

  errorselection() {
    if(!this.noselection && this.accountNumber === undefined) { 
      this.noselection = !this.noselection; 
    } else if(this.noselection && this.accountNumber != undefined) { 
      this.noselection = !this.noselection; 
      this.router.navigateByUrl('/', { state: { data:'showAutopayEnroll' } });
    } else {
      this.router.navigateByUrl('/', { state: { data:'showAutopayEnroll' } });
    } 
    //manageautopay.controls['ap_account'].reset();
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Enroll In Autopay', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 
    this.titleService.setTitle('Policyholder - Enroll in Autopay');
    // Collapse value
    this.isCollapsed = false;
  }
}
