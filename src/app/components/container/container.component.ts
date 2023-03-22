import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

  productsSub: Subscription | undefined
  products: Product[] = []
  isLoading: boolean = true

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0)

    this.productsSub = this.productService.getProducts()
    .subscribe({
      next: (resultData: ResultRequest<Product>)=>{
        if(resultData.isSuccess){
          this.products = resultData.results
          this.isLoading = false
        }
        //this.isLoading = false
      },
      error: (error: any)=>{
        console.log("Erreur : ", error)
        this.isLoading = true
      },
      complete: ()=>{
        console.log("product-list.ts -> Product list init completed")
      },
    })
  }

  ngOnDestroy(): void {
      this.productsSub?.unsubscribe()
  }
}
