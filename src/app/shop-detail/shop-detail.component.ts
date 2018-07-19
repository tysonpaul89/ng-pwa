import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../services/shop.service';
import { IShopDetail } from '../IShopDetail';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit, OnChanges {
  shopDetail: IShopDetail;
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.shopService.getShopDetail(+params.id)
        .subscribe(shopDetail => {
          this.shopDetail = shopDetail;
        });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
