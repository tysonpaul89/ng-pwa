import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  isPushNotifyActive = true;
  latLang: { lat: number, lang: number };
  pushForm: FormGroup;
  iconUrl = '/assets/icons/icon-72x72.png';

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) {
    this.pushForm = this.fb.group({
      pushMessage: ''
    });
  }

  ngOnInit() {
    console.log(navigator.onLine);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  getUserLocation() {
    if (navigator.geolocation) {
      const snackBarRef = this.snackBar.open(
        'Geolocation is supported!', 'Dismiss', {
        duration: 3000
      });

      snackBarRef.onAction().subscribe(() => {
        snackBarRef.dismiss();
      });

      navigator.geolocation.getCurrentPosition(
        (postion) => {
          this.latLang = {
            lat: postion.coords.latitude,
            lang: postion.coords.longitude
          };
        },
        (err) => console.log(err)
      );
    } else {
      const snackBarRef = this.snackBar.open(
        'Geolocation is not supported for this Browser/OS.',
        'Dismiss', {
        duration: 3000
      });

      snackBarRef.onAction().subscribe(() => {
        snackBarRef.dismiss();
      });
    }
  }

  sendPushNotification() {
    const message: string = this.pushForm.value.pushMessage;
    if (Notification['permission'] !== 'granted') {
      this.requestPushNotification();
    } else {
      this.displayNotification(message);
    }
    this.pushForm.reset();
  }

  requestPushNotification() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
  }

  displayNotification(message: string) {
    if (Notification['permission'] === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        const options: object = {
          body: message,
          icon: this.iconUrl,
          image: this.iconUrl,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          data: { // Extra data
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        };
        reg.showNotification(message);
      });
    }
  }



  toggleNotificationSubscription(pushSubStatus) {
    this.isPushNotifyActive = pushSubStatus;
  }

}
