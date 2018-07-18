import { Component, OnInit } from '@angular/core';
import { ISlideShow } from '../lib/ISlideShow';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // slideShowObj: IImage[];
  imageUrls = [
    { url: 'http://oberonmall.com/wp-content/uploads/2018/04/04.jpg'},
    { url: 'http://oberonmall.com/wp-content/uploads/2018/04/02.jpg'},
    { url: 'http://oberonmall.com/wp-content/uploads/2018/04/03.jpg'},
    'http://oberonmall.com/wp-content/uploads/2018/04/01.jpg'
  ];
  height: string = '350px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';
  constructor() {
  }

  ngOnInit() {
  }
}
