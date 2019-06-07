import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TranferService } from './tranfer.service';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TranferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
