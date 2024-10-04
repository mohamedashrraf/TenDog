import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { IItems } from 'src/app/Interfaces/Items';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  public _url:string='/assets/Data/Items.json';
  allitem:IItems[];
  ErrMsg;

  constructor(private http:HttpClient) { }
  
  getItems():Observable<IItems[]>
  {
    return this.http.get<IItems[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message || "Server Error");
    }));
  }

  GetItemInfo(itemid){
    this.getItems().subscribe(data => this.allitem = data, error=>this.ErrMsg=error);
    for(let i=0; i<this.allitem.length; i++)
    {
      if(itemid == this.allitem[i].id )
      {
        return this.allitem[i];
      }
    }
  }

  x:number=0;
  final(n:number):number{
    return this.x += n;
  }

 
}



