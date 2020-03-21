

import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AsyncValidator,AbstractControl ,ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn} from '@angular/forms';
import { Directive } from '@angular/core';

export function EmailValidator (authService:AuthService):AsyncValidatorFn{
  return (c:AbstractControl):Promise<ValidationErrors | null> | Observable <ValidationErrors | null>=>{
    return authService.validateEmail(c.value).pipe(
      map(data=>{
        console.log(data);
        return data ?   {'EmailValidator':true}:null;
      })
    );
  };
}


@Directive({
  selector: '[EmailValidator]',
  providers:[{provide :NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator {

  constructor(private authService:AuthService) { }
  validate;
  static createValidator(authService:AuthService) {
    return (control: AbstractControl) => {
      return authService.validateEmail(control.value).pipe(map(res => {
        return res== null ? null: {emailExists:true};
      }))
      ;
    };
  }

}


