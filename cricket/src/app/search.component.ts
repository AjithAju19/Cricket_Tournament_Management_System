import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name:string = "";

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  show:boolean = false;
  value = [{name:"",age:"",jno:"",runs:"",rating:"",team:""}];

  search(){

    this.db.searchService(this.name).subscribe(data=>{

      this.value = data;
      this.show = true;


      if(data["message"] == ""){

        alert("No player record found");

      }


    });

  }



}
