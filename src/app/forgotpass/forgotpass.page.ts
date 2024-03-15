import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  show = true;

  isShown: boolean = true;
  isShown1: boolean = false;


  constructor() { }
  toggleDivs() {
    this.isShown = !this.isShown;
    this.isShown1 = !this.isShown1;
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }


}
