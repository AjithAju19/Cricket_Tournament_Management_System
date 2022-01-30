import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  name:string="";
  age:any;
  jno:any;
  rating:any;
  runs:any;
  team:any;

  show1:boolean = false;

  constructor(private db:DbutilityService) { }

  ngOnInit(): void {
  }

  update(){
    this.show1 = true;

  }

  update1()
  {
    this.db.updateService(this.name,this.age,this.jno,this.runs,this.rating,this.team).subscribe(data => {

      if(data["message"])
      {
          alert(this.name+" record updated successfully...");
      }
      else if(data["message"] == ""){

        alert("No player record found");

      }


    });
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

  myIndex = 0;
  
  
  carousel() {
    var i;
    var x = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    this.myIndex++;
    if (this.myIndex > x.length) {this.myIndex = 1}    
    x[this.myIndex-1].style.display = "block";  
    setTimeout('carousel()', 2000); // Change image every 2 seconds
  }
  
  
  
  
}
