import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './NewComponent/About/about/about.component';
import { CartComponent } from './NewComponent/Cart/cart/cart.component';
import { ContactComponent } from './NewComponent/Contact/contact/contact.component';
import { HomeComponent } from './NewComponent/Home/home/home.component';
import { ItemComponent } from './NewComponent/Item/item/item.component';
import { LoginComponent } from './NewComponent/LogIn/login/login.component';
import { PagenotfoundComponent } from './NewComponent/PageNotFound/pagenotfound/pagenotfound.component';
import { ShopComponent } from './NewComponent/Shop/shop/shop.component';
import { SignupComponent } from './NewComponent/signup/signup.component';

const routes: Routes = [{path:'',redirectTo:'/Home',pathMatch:'full'},{path:'Home',component:HomeComponent},
{path:'Shop',component: ShopComponent},{path:'Item/:id',component: ItemComponent},
{path:'About',component:AboutComponent},{path:'Contact',component:ContactComponent},
{path:'Login',component:LoginComponent},{path:'SignUp',component:SignupComponent},
{path:"**",component:PagenotfoundComponent}];

/* {path:'Cart',component:CartComponent}, */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
