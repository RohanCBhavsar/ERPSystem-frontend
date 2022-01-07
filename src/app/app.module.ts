import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewReceiptComponent } from './components/preview-receipt/preview-receipt.component';
import { ErpComponent } from './pages/erp/erp.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewReceiptComponent,
    ErpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
