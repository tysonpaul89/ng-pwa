import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ShopsComponent } from './shops/shops.component';
import { ExampleComponent } from './example/example.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';

// Route definition
const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'offers', component: OffersComponent},
  {path: 'shops', component: ShopsComponent},
  {path: 'shops/:id', component: ShopDetailComponent},
  {path: 'example', component: ExampleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HomeComponent,
    OffersComponent,
    ShopsComponent,
    ExampleComponent,
    ShopDetailComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    SlideshowModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
