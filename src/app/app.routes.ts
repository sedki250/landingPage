import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { News } from './features/news/news';
import { Product } from './features/product/product';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home,title:'Home'},
    {path:'about',component:About,title:'About'},
    {path:'contact',component:Contact,title:'Contact'},
    {path:'news',component:News,title:'News'},
    {path:'product',component:Product,title:'Product'},
    {path:'**',component:NotFound,title:'notfound'},
];
