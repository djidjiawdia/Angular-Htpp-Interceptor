import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authSer: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(value): void {
    this.authSer.login(value)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
