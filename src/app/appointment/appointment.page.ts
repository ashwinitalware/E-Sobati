import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert2(abc: any) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message:
        '<img src="assets/' +
        abc +
        '" alt="g-maps"><br><b>Your Appointment has been confirmed !</b>',
      buttons: ['OK'],
    });
  
    await alert.present();
  }
  
  confirm(abc1: any) {
    this.presentAlert2(abc1);
  }
  
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
