import { HttpClientModule } from '@angular/common/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DbutilityService {

  constructor(private http:HttpClient) { }

  insertService(name:String,age:number,jno:number,runs:number,rating:number,team:String):Observable<any>
  {
    return this.http.get("http://localhost:5000/insert?name="+name+"&age="+age+"&jno="+jno+"&runs="+runs+"&rating="+rating+"&team="+team);
  }


  insert_teamService(tid:number,tname:String,noofwins:number,nooflosses:number):Observable<any>
  {
    return this.http.get("http://localhost:5000/tinsert?tid="+tid+"&tname="+tname+"&noofwins="+noofwins+"&nooflosses="+nooflosses);
  }



  displayAllService():Observable<any>{

    return this.http.get("http://localhost:5000/display");


  }

  displayAll_teamService():Observable<any>{

    return this.http.get("http://localhost:5000/tdisplay");


  }

  searchService(name:String):Observable<any>{

    return this.http.get("http://localhost:5000/search?name="+name);


  }

  search_teamService(tname:String):Observable<any>{

    return this.http.get("http://localhost:5000/tsearch?tname="+tname);


  }

  updateService(name:String,age:number,jno:number,runs:number,rating:number,team:String):Observable<any>{

    return this.http.get("http://localhost:5000/update?name="+name+"&age="+age+"&jno="+jno+"&runs="+runs+"&rating="+rating+"&team="+team);

  }

  update_teamService(tid:number,tname:String,noofwins:number,nooflosses:number):Observable<any>{

    return this.http.get("http://localhost:5000/tupdate?tid="+tid+"&tname="+tname+"&noofwins="+noofwins+"&nooflosses="+nooflosses);

  }

  deleteService(name:String):Observable<any>{

    return this.http.get("http://localhost:5000/delete?name="+name);

  }

  delete_teamService(tname:String):Observable<any>{

    return this.http.get("http://localhost:5000/tdelete?tname="+tname);

  }
  

}
