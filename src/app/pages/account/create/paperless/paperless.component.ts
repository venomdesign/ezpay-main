import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-paperless',
  templateUrl: './paperless.component.html',
  styleUrls: ['./paperless.component.scss']
})
export class CreatepaperlessComponent implements OnInit {
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
    this.modalService.open(content, { centered: true, size: 'xl' });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Create Account', link: '/' }, { label: 'Paperless Preferences', active: true }]; //{ label: 'Policy GL 1040086B', link: '/policy' }, 
    this.titleService.setTitle('Create - Paperless');
    // Collapse value
    this.isCollapsed = false;
  }
}
