import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {

  @ViewChild(MatButton) menuButton: MatButton;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  dissmissNav(drawer: MatSidenav, menuButton: MatButton) {
    // Don't hide side nav on desktops
    if (drawer.mode != 'side') {
      drawer.toggle();
      (<any>menuButton)._focusMonitor.stopMonitoring(menuButton._getHostElement());
    }
  }

  // handleClose = (button: MatButton) => {
  //   console.log(button);
  //   // <any> needed to satisfy ts compiler, otherwise it won't allow accessing MatButton's private methods
  //   (<any>button)._focusMonitor.stopMonitoring(button._getHostElement());
  // }

}
