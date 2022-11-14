import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-additional-info',
  templateUrl: './product-additional-info.component.html',
  styleUrls: ['./product-additional-info.component.css']
})
export class ProductAdditionalInfoComponent implements OnInit {

  product: Product | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
