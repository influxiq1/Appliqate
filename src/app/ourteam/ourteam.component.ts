import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Appliqate | Ourteam');
    this.meta.setTag('og:description', 'Appliqate aspires to lead the future of payment processing for businesses by incorporating the method of blockchain payments. ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:url', 'http://www.appliqate.com/ourteam');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'http://www.appliqate.com/assets/images/biglogo2.png');
  }

  ngOnInit() {
  }

}
