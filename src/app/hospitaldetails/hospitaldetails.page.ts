import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitaldetails',
  templateUrl: './hospitaldetails.page.html',
  styleUrls: ['./hospitaldetails.page.scss'],
})
export class HospitaldetailsPage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }


  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
