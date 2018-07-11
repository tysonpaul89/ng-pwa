import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
  }
  ngOnInit() {

    // Event to show network status
    window.addEventListener('load', () => {
      const updateOnlineStatus = (event) => {
        const message = navigator.onLine ? "Yay! Your\'e Online" : 'Opps! Your\'e Offline';
        this.snackBar.open(
          message,
          'Dismiss'
        );
      }

      window.addEventListener('online',  updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    });

    // this.swUpdate.available
    //   .subscribe((event) => {
    //     console.log('Update available');
    //     const snack = this.snackBar.open(
    //       'Update is available',
    //       'Reload',
    //       { duration: 3000}
    //     );
    //     snack.onAction().subscribe(() => {
    //       window.location.reload();
    //     });
    //   });
    //   this.swUpdate.checkForUpdate();
  }
}
