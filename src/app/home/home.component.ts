import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrls: IImage[]= [
    { url: 'http://oberonmall.com/wp-content/uploads/2018/04/02.jpg'},
    { url: 'http://oberonmall.com/wp-content/uploads/2018/04/04.jpg'},
    { url: 'http://oberonmall.com/wp-content/uploads/2018/04/03.jpg'},
    { url: 'http://oberonmall.com/wp-content/uploads/2018/04/01.jpg'},
  ];
  height: string = '350px';
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
