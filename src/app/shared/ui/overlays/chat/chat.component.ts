import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'chat-card',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private titleService: Title, private modalService: NgbModal) { }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true }); //centered: true, size: 'md|lg|xl'
  }

  ngOnInit(): void {
    this.titleService.setTitle('Design - Chat');
  }

}
