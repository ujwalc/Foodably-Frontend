

import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AsyncValidator,AbstractControl ,ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn} from '@angular/forms';
import { Directive } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';



@Directive({
  selector: '[EmailValidator]',
  providers:[{provide :NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator {

  debouncer:any;

  constructor(private authService:AuthService) { }
  validate;
  /* static createValidator(authService:AuthService) {
    return (control: AbstractControl) => {
      return authService.validateEmail(control.value).pipe(map(res => {
        return res== null ? null: {emailExists:true};
      }))
      ;
    };
  } */

  validateEmailId(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.authService.validateEmail(control.value).subscribe((res:any) => {
          if(res.emailNotTaken ){
            console.log(res);
            resolve(null);
          }
          else{
            console.log(res);
            resolve({'EmailInUse': true})
          }
        }, (err) => {
         
          resolve({'EmailInUse': true});
        });

      }, 1000);      

    });
  }
  validateEmailIdForLogin(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.authService.validateEmail(control.value).subscribe((res:any) => {
          if(res.emailNotTaken==false ){
            console.log(res);
            resolve(null);
          }
          else{
            console.log(res);
            resolve({'Register': true})
          }
        }, (err) => {
         
          resolve({'Register': true});
        });

      }, 1000);      

    });
  }


}


