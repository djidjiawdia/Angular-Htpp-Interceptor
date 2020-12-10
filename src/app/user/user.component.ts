import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [];
  
  constructor(private authSer: AuthService) { }

  ngOnInit(): void {
    if(this.authSer.isLogin){
      this.getUsers();
    }else{
      console.log("Connectez vous");
    }
  }

  private getUsers(): void {
    this.authSer.allUsers()
      .subscribe(
        users => console.log(users)
      )
  }

}
