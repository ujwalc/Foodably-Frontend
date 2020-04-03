import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {FilterData} from '../../forms/adv-search/filter.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchKey:any
  filterKey:Boolean
  filter:FilterData


  //constructor(private httpclient: HttpClient) {
constructor(){

}


  putSearchKey(searchKey){
    this.searchKey = searchKey
  }
  getSearchKey(){
    return this.searchKey
  }
  setFilterKey(){
    this.filterKey = true
  }
  unsetFilterKey(){
    this.filterKey = false
  }
  getFilterKey(){
    return this.filterKey
  }

  putFilterData(data){
    this.filter = data

  }
  getFilterData(){
    return this.filter
  }


}
