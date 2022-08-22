import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() icon: string;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Venomdesign - Stat');
  }

}
