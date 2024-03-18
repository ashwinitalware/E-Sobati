import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointmenthistory',
  templateUrl: './appointmenthistory.page.html',
  styleUrls: ['./appointmenthistory.page.scss'],
})
export class AppointmenthistoryPage implements OnInit {

  switchTab = 'processing';

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

}
