
import { Injectable } from '@angular/core';
import {User} from './models/user';
import { Observable, throwError } from 'rxjs';

import { catchError, map ,filter, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  id='';
  isAuthorized:boolean;
  constructor(
    private http: HttpClient,
    public router: Router
    
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user: User) {
    console.log(user)
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        
        console.log(res._id);
        console.log(res.token);
        localStorage.setItem('access_token', res.token)
       
        this.getUserProfile(res._id).subscribe((res) => {
          console.log(res);
          this.id=res.msg._id;
          this.currentUser = res;
          
          //this.router.navigate(['']);
          
        })
        
      },
      (error) => {                              //Error callback
        console.error('error caught in component')
        
        window.alert("Invalid username or password")
        this.router.navigate(['login']);
      }
      )
  }

  getToken() {
    console.log(localStorage.getItem('access_token'));
    return localStorage.getItem('access_token');
  }
  

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

  removeToken(){
    localStorage.removeItem('access_token');
  }
  // User profile
  getUserProfile(id): Observable<any> {
    console.log(id);
    let api = 'http://localhost:4000/api/user-profile/'+id;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        
        console.log(res);
        return res || {}
        
      }),
      catchError(this.handleError)
    )
  }

  validateEmail(email){
    console.log('http://localhost:4000/api/validateEmail/'+email);
    return this.http
    .get('http://localhost:4000/api/validateEmail/'+email);/* pipe(
      map((response: Response) => response.json()
      
      ),catchError(this.handleError))  */
    
}
requestReset(body): Observable<any> {
  return this.http.post(`${this.endpoint}/req-reset-password`, body);
}
newPassword(body): Observable<any> {
  return this.http.post(`${this.endpoint}/new-password`, body);
}
ValidPasswordToken(body): Observable<any> {
  return this.http.post(`${this.endpoint}/valid-password-token`, body);
}

updateBio(id,bio):Observable<any>{
  this.http.put('http://localhost:4000/api/updateBio/'+id+'/'+bio,null).subscribe(res=>{
    console.log(res);
  })
  return this.http.put('http://localhost:4000/api/updateBio/'+id+'/'+bio,null);

  
}

deleteProfile(id):Observable<any>{
  this.removeToken();
  return this.http.delete('http://localhost:4000/api/delete-user/'+id);
}


  

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  handleError2(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      if(error.status===401){
        window.alert('Invalid user name or password');
        this.router.navigate(['login']);

      }else{
        console.error("some error happened");
      }
    }
    return throwError(error);
  }
}
