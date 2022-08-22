import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

/**
 * Basic table component
 */
export class BasicComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Basic Tables', active: true }];
    this.titleService.setTitle('Venomdesign - Basic Table');
  }
}
