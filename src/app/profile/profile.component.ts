import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser:Object={};
  name:'';
  firstLetter:any;
  //isLogin=false
  
  constructor(
    public authService:AuthService,
    private actRoute:ActivatedRoute,
    private route: Router) {
      //let id = this.actRoute.snapshot.paramMap.get('id');
      let id=this.authService.id;
      this.authService.getUserProfile(id).subscribe(res => {
      console.log(res);
      this.currentUser = res.msg;
        this.name=res.msg.name;
        this.firstLetter=this.name.charAt(0);
    })
     }

  ngOnInit() {
  }
 

  


}
