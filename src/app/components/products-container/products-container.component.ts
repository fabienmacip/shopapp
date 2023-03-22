import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from 'src/app/models/result-request';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {

  categories: ResultRequest<Category> | undefined
  categoriesSub: Subscription | undefined
  productSub: Subscription | undefined
  products: Product[] | undefined

  constructor(
      private categoriesService: CategoriesService,
      private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.categoriesSub = this.categoriesService.getCategories()
    .subscribe({
      next: (value: ResultRequest<Category>) => {
        this.categories = value
      }
    })
  }

  handleClick(event: any, category: Category){
    event.preventDefault()
    this.productSub = this.productService.getProducts()
    .subscribe({
      next: (restultData: ResultRequest<Product>) => {
        if(restultData.isSuccess){
          let products = restultData.results
          this.products = products.filter((product: Product)=>{
            for(let index = 0; index < product.categories.length; index++){
              if(product.categories[index].slug === category.slug){
                return true
              }
            }
            return false
          })

      }}
    })
  }

  ngOnDestroy(): void {
      this.categoriesSub?.unsubscribe()
      this.productSub?.unsubscribe()
  }
}
