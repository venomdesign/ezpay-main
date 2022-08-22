import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from './shared/canonical.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private titleService: Title,
    private metaTagService: Meta, 
    private canonicalService: CanonicalService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Another template by your friendly neighborhood Venomdesign');
    this.metaTagService.addTags([
      { name: 'keywords', content: "Schweigart's Policyholder" },
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'author', content: 'Chris Schweigart' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ])
    this.canonicalService.setCanonicalURL();
  }
}
