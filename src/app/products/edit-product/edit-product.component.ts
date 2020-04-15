import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: string;
  product;
  isLoading: boolean = false;
  submitting: boolean = false;
  filesToUpload = [];
  imgUrl;
  constructor(
    public router: Router,
    public productService: ProductService,
    public msgService: MsgService,
    public activeRoute: ActivatedRoute
  ) {
    this.id = this.activeRoute.snapshot.params['id'];
    this.imgUrl = environment.ImgUrl;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getById(this.id).subscribe(
      (data: any) => {
        this.product = data;
        this.product.discountedItem = data.discount.discountedItem;
        this.product.discountType = data.discount.discountType;
        this.product.discount = data.discount.discount;
        this.product.warrentyStatus = data.warrenty && data.warrenty.warrentyStatus;
        this.product.warrentyPeriod = data.warrenty && data.warrenty.warrentyPeriod;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.msgService.showError(error);
      }
    )
  }

  submit() {
    this.submitting = true;
    this.productService.upload(this.product, this.filesToUpload, "PUT")
      .subscribe(data => {
        this.msgService.showSuccess('Product updated successfully');
        this.router.navigate(['/product/view']);
      }, error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
      )
  }

  fileChanged(ev) {
    this.filesToUpload = ev.target.files;
  }
}
