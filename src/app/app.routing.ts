import { Routes } from "@angular/router";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { ContainerComponent } from "./components/container/container.component";
import { ProductAdditionalInfoComponent } from "./components/product-tabs/product-additional-info/product-additional-info.component";
import { ProductDescriptionComponent } from "./components/product-tabs/product-description/product-description.component";
import { ProductReviewsComponent } from "./components/product-tabs/product-reviews/product-reviews.component";
import { ProductVendorComponent } from "./components/product-tabs/product-vendor/product-vendor.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductsContainerComponent } from "./components/products-container/products-container.component";

export const ROUTES : Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:slug',
    component: ProductComponent,
    //pathMatch: 'full'
    children:[
      {
        path: '',
        redirectTo: 'description',
        pathMatch: 'prefix'
      },
      {
        path: 'description',
        component: ProductDescriptionComponent
      },
      {
        path: 'additional-info',
        component: ProductAdditionalInfoComponent
      },
      {
        path: 'vendor-info',
        component: ProductVendorComponent
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductsContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  }
]
