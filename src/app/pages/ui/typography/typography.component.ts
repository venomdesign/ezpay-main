import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})

/**
 * UI-video component
 */
export class TypographyComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Typography', active: true }];
    this.titleService.setTitle('Venomdesign - Typography');
  }
}
