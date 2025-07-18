import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiaoDien } from './giao-dien/giao-dien';
import { ProductList } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { ProductDetail } from './product-detail/product-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GiaoDien, ProductList, CategoryList,ProductDetail],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-angular-app';
}
