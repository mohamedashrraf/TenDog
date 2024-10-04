import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactInfo } from '../../../Classes/contact-info';
import { Information } from '../../../Interfaces/information';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  arr : Information[];
  url: string = "https://www.google.com.eg/maps/embed/@27.1873312,31.1933611,21z?hl=en&authuser=0";
  urlSafe: SafeResourceUrl;
 cont = new ContactInfo('',undefined,'','');
  constructor(public sanitizer: DomSanitizer) { 
    this.arr = new Array();
  }
  /* الفانكشن دي بتتنفز علشان ازود حجم البوردر ف كل واحدة اضغط عليها */
  boldBroder(eve):void
  {
    eve.style.borderBottom="2px solid #222";
  }
  
  ngOnInit(): void {
 
  }
  /*الفانكشن دي بتتنفذ لما تضغط على زرار ال سند*/
 print(t1,t2,t3,t4)
 {
   /*هنا انا عملت اراي من نوع انترفيس بيخزن الداتا اللي راجعة من الفورم*/
  var row:Information ={name:t1.value,phone:t2.value,email:t3.value,message:t4.value};
  /*من هنا الكود بتاع ستاك اوفر فلو اللي بيخزن في اللوكال ستورج*/
    if (localStorage.getItem("test")) {
      this.arr = JSON.parse(localStorage.getItem("test"));
  } else {
      // No data, start with an empty array
      this.arr = [];
  }
  console.log(this.arr);
  this.arr.push(row);
  localStorage.setItem("test", JSON.stringify(this.arr));
 
 }
}
