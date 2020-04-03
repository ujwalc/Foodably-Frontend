import { Component, OnInit } from '@angular/core';
import {ShoppinglistserviceService} from './shoppinglistservice.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit
 {
  lat: string='';//number = 44.6344
  lng: string='';//number = -63.5822
  cookinglist: any=[];
  location: Object;
  // public shoppingList = [
  //   {name:"Chicken",qty:"500gm"},
  //   {name:"Oil",qty:"100ml"},
  //   {name:"Chillies",qty:"10g"}
  // ];

  constructor(private map:ShoppinglistserviceService) { }

  ngOnInit() {

    this.map.getCookingList()
    .subscribe((data: any) => {
       this.cookinglist=data;

        console.log(this.cookinglist);
        return this.cookinglist;
})


    // console.log("users array1", this.cookinglist);
    // this.map.getlocation().subscribe(data => {
    //   console.log(data);
    //   this.lat = data.latitude;
    //   this.lng=data.longitude;
    // })

  }
  getData(){
    this.map.getCookingList()
    .subscribe((data: any) => {
       this.cookinglist=data;

        console.log(this.cookinglist);
        return this.cookinglist;
})
  }





}
