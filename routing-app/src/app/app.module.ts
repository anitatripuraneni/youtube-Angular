import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'member',
        component:MembersComponent
      },
      {
        path:'product',
        component:ProductsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
