import { Component, OnInit } from '@angular/core';
import { Observable, Subject, catchError, of } from 'rxjs';
import { User } from '../model/interfaces';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();


  isLoading = true;
  users$!: Observable<User[]>;
  constructor(private userService: UserService) {
    console.log(' users$: ', this.users$);
  }

  // users$ = this.userService.getUsers();

  ngOnInit() {
    this.users$ = this.userService.getUsers().pipe(
      catchError((err) => {
        console.log(err);
        this.error$.next(err);
        return of([]);
      })
    );
  }
}
