import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
//import { SelectEventArgs } from '@syncfusion/ej2-angular-lists';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  i:HTMLElement;
  constructor() {
    this.i = document.getElementById('cartcount');
      }

  ngOnInit(): void {
  }

 // @ViewChild(ChildDirective,{static: false}) sidebar: SidebarComponent;
  @ViewChild('rightSidebar') rightSidebar: SidebarComponent;

  public width:string='350px';
  public position:string='Right';
  //public type: string='Push';
  public type: string = 'Over';


  rightToggle() {
      this.rightSidebar.toggle();
  }
  

  
  public isOpen: boolean = true;
  public closeOnDocumentClick: boolean = true;

  public onCreated(args: any) {
       this.rightSidebar.element.style.visibility = '';
  }



  openClick() {
      this.rightSidebar.show();
  }
  closeClick() {
      this.rightSidebar.hide();
  }



  

}

