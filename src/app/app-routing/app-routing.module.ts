import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OffersComponent } from '../offers/offers.component';
import { ShopsComponent } from '../shops/shops.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';
import { BlogComponent } from '../blog/blog.component';

// Route definition
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'shops', component: ShopsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [
    HomeComponent,
    OffersComponent,
    ShopsComponent,
    GalleryComponent,
    ContactComponent,
    BlogComponent,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
