import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-offer',
  templateUrl: './purchase-offer.page.html',
  styleUrls: ['./purchase-offer.page.scss'],
})
export class PurchaseOfferPage implements OnInit {
  public title : string ='Plans & Offer'
  public headcolor: string ='primary'
  constructor() { }

  ngOnInit() {
  }

}
