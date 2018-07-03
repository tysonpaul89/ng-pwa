import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {MatSnackBar} from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  isPushNotifyActive = true;
  latLang : { lat: number, lang: number };
  constructor(private snackBar: MatSnackBar) {
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  getUserLocation() {
    if (navigator.geolocation) {
      const snackBarRef = this.snackBar.open('Geolocation is supported!','Dismiss', {
        duration: 3000
      });

      snackBarRef.onAction().subscribe(() => {
        snackBarRef.dismiss();
      });

      navigator.geolocation.getCurrentPosition(
        (postion) => {
          this.latLang = { lat: postion.coords.latitude, lang: postion.coords.longitude }
        },
        (err) => console.log(err)
      );
    }
    else {
      const snackBarRef = this.snackBar.open('Geolocation is not supported for this Browser/OS.','Dismiss', {
        duration: 3000
      });

      snackBarRef.onAction().subscribe(() => {
        snackBarRef.dismiss();
      });
    }
  }

  sendPushNotification() {
  }

  toggleNotificationSubscription(pushSubStatus) {
    this.isPushNotifyActive = pushSubStatus;
  }

}
