import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { GetItemsService } from 'src/app/Services/ShopItems/get-items.service';
import { Router } from '@angular/router';
import { IItems } from 'src/app/Interfaces/Items';
import { SharedserviceService } from 'src/app/Services/SharedServices/sharedservice.service';
import { HeaderComponent } from '../../Header/header/header.component';

declare function incrementValue(): any;
declare function decrementValue(): any;
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit{



  Items=[];
  ErrMsg;

  ItemId;
  ItemInfo:IItems;
  cssurl;
  prevItemtId ;
  nextItemtId ;

  head = new HeaderComponent;
  item:HTMLElement = this.head.i;

  //i2:number = this.i.crt;
  constructor(private route :ActivatedRoute, private router:Router, private getItem:GetItemsService, private sharedService:SharedserviceService) { }

  ngOnInit(){

    //this.ItemId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params:ParamMap)=>{this.ItemId=parseInt(params.get('id'));});
    //this.getItem.getItems().subscribe(data=>this.Items = data, error=>this.ErrMsg=error);

    this.ItemInfo = this.getItem.GetItemInfo(this.ItemId);
    this.cssurl =  '../../../../'+ this.ItemInfo.photo;

    incrementValue();
    decrementValue();
  }




  goPrev()
  {
    //this.router.navigate(["/Shop"]);
    this.prevItemtId = this.ItemId-1;
    this.ItemInfo = this.getItem.GetItemInfo(this.prevItemtId);
    this.router.navigate(["/Item",this.prevItemtId]);
  }
  goNext()
  {
    this.nextItemtId=this.ItemId+1;
    this.ItemInfo = this.getItem.GetItemInfo(this.nextItemtId);
    this.router.navigate(["/Item",this.nextItemtId]);
  }


 num:number = 1;

  incrementValue()
  {
      //var value = parseInt(document.getElementById('number').value, 10);
      this.num = isNaN(this.num) ? 0 : this.num;
      if(this.num<12){
        this.num++;
        this.num = this.num;
      }
  }

   decrementValue()
    {
      this.num = isNaN(this.num) ? 0 : this.num;
          if(this.num>0){
            this.num--;
            this.num = this.num;
          }
    }

    cartCount()
    {
      this.item.innerHTML = (this.getItem.final(this.num)).toString();
    }


}

  


