import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct ;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
        'productId': id,
        "productName":"Hammer",
        "productCode":"TBX-0048",
        "releaseDate":"May 18, 2018",
        "description": "Hammer made of Woood",
        "price": 199.99,
        "starRating":3.3,
        "imgUrl":"https://s.hswstatic.com/gif/hammer-1.jpg"
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
