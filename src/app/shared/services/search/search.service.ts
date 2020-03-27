import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchKey:any

  //constructor(private httpclient: HttpClient) {
constructor(){}


  putSearchKey(searchKey){
    this.searchKey = searchKey
  }
  getSearchKey(){
    return this.searchKey
  }
  /*
  getAllRecipes(hn,searchID): Observable<any> {
    const subURL="http://"+hn+":4000/search/"+searchID;
    return this.httpclient.get(subURL);
}
*/
}
