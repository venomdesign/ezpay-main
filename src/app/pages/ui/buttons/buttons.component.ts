import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

/**
 * UI-buttons component
 */
export class ButtonsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  model = {
    left: true,
    middle: false,
    right: false
  };
  radio = 1;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Buttons', active: true }];
    this.titleService.setTitle('Venomdesign - Buttons');
  }
}
