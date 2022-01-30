import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  scroll(){
    window.scrollTo(300,700);
  }


  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  value = [{tid:"",tname:"",noofwins:"",nooflosses:""}];
  show:boolean = false;

  displayAll_team()
  {
    this.db.displayAll_teamService().subscribe(data => {

      this.value = data;
      this.show = true;

    });
  }

}
