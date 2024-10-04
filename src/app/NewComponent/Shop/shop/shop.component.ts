import { Component, OnInit } from '@angular/core';
import { GetItemsService } from 'src/app/Services/ShopItems/get-items.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  Items=[];
  ErrMsg;
 
  constructor(private GetItems:GetItemsService,private router :Router) { }

  ngOnInit(): void {
    this.GetItems.getItems().subscribe(data=>this.Items = data, error=>this.ErrMsg=error);
  }

  OnSelect(it)
  {
    this.router.navigate(["/Item",it.id]);
  }

}
