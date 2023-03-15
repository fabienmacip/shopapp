import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from 'src/app/models/result-request';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {

  categories: ResultRequest<Category> | undefined
  categoriesSub: Subscription | undefined

  constructor(
      private categoriesService: CategoriesService
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
  }

  ngOnDestroy(): void {
      this.categoriesSub?.unsubscribe()
  }
}
