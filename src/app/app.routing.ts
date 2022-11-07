import { Routes } from "@angular/router";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { ContainerComponent } from "./components/container/container.component";
import { ProductComponent } from "./components/product/product.component";

export const ROUTES : Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:slug',
    component: ProductComponent,
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
