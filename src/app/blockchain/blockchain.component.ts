import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  
  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Appliqate | Bblockchain');
    this.meta.setTag('og:description', 'Appliqate aspires to lead the future of payment processing for businesses by incorporating the method of blockchain payments. ');
    this.meta.setTag('og:title', ' Appliqate | Bblockchain ');
    this.meta.setTag('og:url', 'http://www.appliqate.com/blockchain');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'http://www.appliqate.com/assets/images/biglogo2.png');
  }

  ngOnInit() {
  }

}
