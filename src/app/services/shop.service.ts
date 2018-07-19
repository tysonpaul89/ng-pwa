import { Injectable } from '@angular/core';
import { IShopDetail } from '../IShopDetail';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shopDeatils: IShopDetail[] = [
    {
      id: 1,
      title: 'Lee',
      description: `Lee is an American brand of denim jeans,
      first produced in 1889 in Salina, Kansas. The company is owned by VF
      Corporation, the largest apparel company in the world.The company was
      formed in 1889 by Henry David Lee as the Lee Mercantile Company at Salina,
      Kansas producing dungarees and jackets.
      The growth of Lee was prompted by the introduction of the Union-All work
      jumpsuit in 1913 and their first overall in 1920.
      Later in the 1920s Lee introduced a zipper fly and continued to expan.`,
      socialLink: 'https://www.facebook.com/leejeans',
      indoorMapImage: 'http://oberonmall.com/wp-content/uploads/2017/06/G1_Lee-1.png'
    },
    {
      id: 2,
      title: 'Levis',
      description: `Since the invention by Levi Strauss in 1873, Levi’s® jeans
      have been capturing the imagination and loyalty of people for
      generations. Our range of leading jeanswear and accessories is available
      in more than 110 countries, allowing individuals around the world to
      express their personal style.`,
      socialLink: 'https://www.facebook.com/Levis.india',
      indoorMapImage: 'http://oberonmall.com/wp-content/uploads/2017/06/G1_levis-1.png'
    },
    {
      id: 3,
      title: 'Basics Life',
      description: `Basicslife.com is India\'s favourite menswear e-store .
      Basics merchandise is also available in 100 + exclusive stores &
      600 MBOs across the world. From clothing to accessories,
      Basics Life is ultimate fashion destination and the first-of-its-kind
      store in India. Since 1990, over 5 million men have trusted Basics to
      look trendy. Keeping with the latest international fashion trends,
      Basicslife showcases lines for spring, summer, fall, and winter,
      in varied fabrics, styles and silhouettes.`,
      socialLink: 'https://www.facebook.com/BasicsLifeIndia',
      indoorMapImage: 'http://oberonmall.com/wp-content/uploads/2017/06/F1_Basics-1.png'
    },
    {
      id: 4,
      title: 'Gini & Jony',
      description: `A trusted brand name synonymous with kids’ fashion.
      Dressing up kids with the latest trends since 1980.
      Complete range of kids (0-16) wear available in 250 stores across India.
      Our innovations and international appeal let young adults make the
      perfect style statement without compromising on comfort.`,
      socialLink: 'https://www.facebook.com/ginijony',
      indoorMapImage: 'http://oberonmall.com/wp-content/uploads/2017/06/2F_gini-jony-1.png'
    },
  ];
  constructor() { }

  getShopDetail(id: number): Observable<IShopDetail> {
    return of(this.shopDeatils.find(obj => obj.id === id));
  }
}
