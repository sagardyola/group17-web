import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { UploadService } from 'src/app/shared/services/upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  submitting: boolean = false;
  product;
  filesToUpload = [];
  url;
  constructor(
    public msgService: MsgService,
    public router: Router,
    public productService: ProductService,
    public uploadService: UploadService
  ) {
    this.product = new Product({});
    this.url = environment.BaseURL + 'product/';
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitting = true;
    this.uploadService.upload(this.product, this.filesToUpload, "POST", this.url)
      .subscribe((data) => {
        this.msgService.showSuccess('Product added successfully');
        this.router.navigate(['/product/view']);
      }, error => {
        this.msgService.showError(error);
        this.submitting = false;
      })
  }

  fileChanged(ev) {
    this.filesToUpload = ev.target.files;
  }

}
