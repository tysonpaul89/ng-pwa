import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  tiles: object[] = [
    {url: 'http://oberonmall.com/wp-content/uploads/2017/05/Lee-1.jpg', href: '1', cols: 2, rows: 2},
    {url: 'http://oberonmall.com/wp-content/uploads/2017/05/levis-1.jpg', href: '2', cols: 2, rows: 2},
    {url: 'http://oberonmall.com/wp-content/uploads/2017/05/basic-life-1.jpg', href: '3', cols: 2, rows: 2},
    {url: 'http://oberonmall.com/wp-content/uploads/2017/06/Brand_image_with_icon-4.jpg', href: '4', cols: 2, rows: 2},
  ];
  constructor() { }

  ngOnInit() {
  }

}
