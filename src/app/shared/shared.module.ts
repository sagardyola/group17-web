import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MsgService } from './services/msg.service';
import { LoaderComponent } from './loader/loader.component';
import { UploadService } from './services/upload.service';



@NgModule({
  declarations: [PageNotFoundComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PageNotFoundComponent, LoaderComponent],
  providers: [MsgService, UploadService] //Global scope
})
export class SharedModule { }
