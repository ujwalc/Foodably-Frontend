

import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../profile-management.component.scss']
})
export class LoginComponent implements OnInit {
  
   signinForm: FormGroup;;

  @Output()
  close = new EventEmitter<void>();
  @Output()
  signin = new EventEmitter<void>();

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
   
    
  ) { 
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate(['']);
    this.close.emit();
  }

  onSubmit() {
    
    this.authService.signIn(this.signinForm.value);

    this.onClose();
    this.router.navigate(['']);
    
    
    //console.log(this.signinForm);
    this.signin.emit();
  }
}
