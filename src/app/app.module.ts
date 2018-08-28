import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductListComponent } from './products/product-list/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
       {path: 'welcome', component: WelcomeComponent},
       {path: 'products', component: ProductListComponent},
       {path: '', redirectTo: 'welcome', pathMatch: 'full'},
       {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
    // RouterModule.forRoot([
    //   {path: 'welcome', component: WelcomeComponent},
    //   {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    //   {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
