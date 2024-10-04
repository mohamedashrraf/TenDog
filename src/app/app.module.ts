import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './NewComponent/Header/header/header.component';
import { HomeComponent } from './NewComponent/Home/home/home.component';
import { ShopComponent } from './NewComponent/Shop/shop/shop.component';
import { ItemComponent } from './NewComponent/Item/item/item.component';
import { FormsModule } from '@angular/forms';
import { GetItemsService } from './Services/ShopItems/get-items.service';
import { FooterComponent } from './NewComponent/Footer/footer/footer.component';
import { ContactComponent } from './NewComponent/Contact/contact/contact.component';
import { AboutComponent } from './NewComponent/About/about/about.component';
import { PagenotfoundComponent } from './NewComponent/PageNotFound/pagenotfound/pagenotfound.component';
import { LoginComponent } from './NewComponent/LogIn/login/login.component';
import { CartComponent } from './NewComponent/Cart/cart/cart.component';
import { SignupComponent } from './NewComponent/signup/signup.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    ItemComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    PagenotfoundComponent,
    LoginComponent,
    CartComponent,
    SignupComponent
    ],
  imports: [
    SidebarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [GetItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
