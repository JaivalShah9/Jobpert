import { Component } from '@angular/core';
import { AppService } from '../table.service';
import { Product, ProductsResponse } from '../product';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component {
    products: Product[] = [];
  totalRecords: number = 0;
  loading: boolean = true;

  constructor(private appService: AppService) { }

  loadProducts($event: LazyLoadEvent) {
    this.loading = true;
    this.appService.getProducts($event.first || 0).subscribe(
      (response: ProductsResponse) => {
        this.loading = false;
        this.products = response.products;
        this.totalRecords = response.total;
      }
    )
  }
}

