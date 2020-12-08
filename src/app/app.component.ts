import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GET_USER } from './store/user/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-jest-starter';

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(new GET_USER());
  }
}
