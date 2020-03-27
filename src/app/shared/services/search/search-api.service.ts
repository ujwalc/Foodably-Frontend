import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  hn:any

constructor( private httpclient: HttpClient) {
  this.hn = window.location.hostname

}

  getAllRecipes(searchID): Observable<any> {
    const subURL="http://"+this.hn+":4000/search/"+searchID;
    return this.httpclient.get(subURL);
  }

  getSortedRecipes(searchID,sortOrder): Observable<any> {
    if(sortOrder=="time"){
      const subURL="http://"+this.hn+":4000/search/asc/"+searchID+"/"+sortOrder;
      return this.httpclient.get(subURL);

    }else{
      const subURL="http://"+this.hn+":4000/search/desc/"+searchID+"/"+sortOrder;
      return this.httpclient.get(subURL);
    }
  }

  getFilteredRecipes(){

  }

}
