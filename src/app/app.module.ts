import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms'; //newly added
import { HttpModule } from '@angular/http'; //newly added
import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, //newly added
    HttpModule //newly added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
