import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private titleService: Title, private modalService: NgbModal) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Report a Claim', active: true }];
    this.titleService.setTitle('Policyholder - Report a Claim');
  }
}
