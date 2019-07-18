import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  private productsObservable: Observable<object>;

  getData() {
    this.productsObservable = this.authService.getDBData(localStorage.getItem("heh@mda.ru"));
  }

  ngOnInit() {
  }

}
