import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { timelineData } from './data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  timelineData;
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Home', link: '/' }, { label: 'Timeline', active: true }];
    this.titleService.setTitle('Venomdesign - Timeline');

    this.timelineData = timelineData;
  }

}
