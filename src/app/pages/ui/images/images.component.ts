import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

/**
 * UI-images component
 */
export class ImagesComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Images', active: true }];
    this.titleService.setTitle('Venomdesign - Images');
  }
}
