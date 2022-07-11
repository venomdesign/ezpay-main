import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paperless',
  templateUrl: './paperless.component.html',
  styleUrls: ['./paperless.component.scss']
})
export class PaperlessComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Collapse declare
  isCollapsed: boolean;
  
  constructor(private modalService: NgbModal, public router: Router) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'xl' });
  }

  showPaperlessUpdated: boolean;
  noselection: boolean;
  paperlessMidyear: string;
  paperlessInvoices: string;
  paperlessPolicy: string;

  errorselection() {
    if(!this.noselection && (this.paperlessMidyear || this.paperlessInvoices || this.paperlessPolicy) === undefined) { 
      this.noselection = !this.noselection; 
    } else if(this.noselection && (this.paperlessMidyear || this.paperlessInvoices || this.paperlessPolicy) != undefined) { 
      this.noselection = !this.noselection; 
      this.showPaperlessUpdated = !this.showPaperlessUpdated; 
      this.router.navigateByUrl('/account/paperless', { state: { data:'showPaperlessUpdated' } });
    } else if(!this.showPaperlessUpdated && (this.paperlessMidyear || this.paperlessInvoices || this.paperlessPolicy) != undefined) {
      this.showPaperlessUpdated = !this.showPaperlessUpdated; 
    } else {
      this.router.navigateByUrl('/account/paperless', { state: { data:'showPaperlessUpdated' } });
    } 
    //manageautopay.controls['ap_account'].reset();
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Paperless Preferences', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 

    // Collapse value
    this.isCollapsed = false;
  }
}
