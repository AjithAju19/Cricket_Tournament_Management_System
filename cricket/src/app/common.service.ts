import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
/*
  display():Observable<any>{

    return this.http.get('http://localhost:5000/api/display/').map((response:Response) =>response.json())

  }
*/
}


