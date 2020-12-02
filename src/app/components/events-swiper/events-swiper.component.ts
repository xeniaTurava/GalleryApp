import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-swiper',
  templateUrl: './events-swiper.component.html',
  styleUrls: ['./events-swiper.component.scss'],
})
export class EventsSwiperComponent implements OnInit {
  slideOpts = {
    initialSlide: 2,
    speed: 400,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  };
  constructor() { }

  ngOnInit() {}

}
