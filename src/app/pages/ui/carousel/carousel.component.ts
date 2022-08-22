import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

/**
 * UI-carousel component
 */
export class CarouselComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  showNavigationArrows: any;
  showNavigationIndicators: any;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Carousel', active: true }];
    this.titleService.setTitle('Venomdesign - Carousel');
  }
}
