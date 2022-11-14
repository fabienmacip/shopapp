import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product | undefined

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeDetails(component: any): void{
    component.product = this.product
  }

}
