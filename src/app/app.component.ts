import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { map, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private notification: NotificationService) {}
  title = 'explore-angular';
  name: string = '';

  setValue() {
    this.name = 'Amr';
  }

  // sendMessage(data) {
  //   this.notification.sendNotification(data.value);
  // }
users = [
  {id:1, name: "amr"},
  {id:2, name: "samy"},
  {id:3, name: "ramy"},
]

users$ = of(this.users)
usernames$ = this.users$.pipe(map(users => users.map(usr => usr.name)))

ngOnInit(): void {
    // this.users$.subscribe((users) => {
    //   console.log('users', users)
    // })
}
}
