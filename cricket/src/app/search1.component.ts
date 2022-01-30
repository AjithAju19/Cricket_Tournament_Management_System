import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {

  constructor(private db:DbutilityService ) { }

  ngOnInit(): void {
  }

  name:string = "";
  show:boolean = false;
  value = [{name:"",age:"",jno:"",runs:"",rating:"",team:""}];

  search(){

    this.db.searchService(this.name).subscribe(data=>{

      this.value = data;
      this.show = true;

    });


}
}
