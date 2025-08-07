import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "news",
        component: NewsComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "product-detail/:id",
        component: ProductDetailComponent
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    },
];
