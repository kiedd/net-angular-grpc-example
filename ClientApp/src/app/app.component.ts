import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreeterClient } from './api/greet.pbsc';
import { FormsModule } from '@angular/forms';
import { EMPTY, Observable, map, of, tap } from 'rxjs';
import { HelloRequest } from './api/greet.pb';
import { CreateUserCommand, User, UsersReply } from './api/user.pb';
import { UserApiClient } from './api/user.pbsc';
import { Empty } from '@ngx-grpc/well-known-types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  userName: string = '';
  userCompany: string = '';
  response$: Observable<string> = of('');
  usersResponse$: Observable<User[]> = EMPTY;

  constructor(
    private readonly greeterClient: GreeterClient,
    private readonly userApiClient: UserApiClient
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  onSend() {
    this.response$ = this.greeterClient
      .sayHello(new HelloRequest({ name: this.userName }))
      .pipe(map(x => x.message));
  }

  getUsers() {
    this.usersResponse$ = this.userApiClient
      .get(new Empty())
      .pipe(map((x: UsersReply) => x.users ?? []));
  }

  createUser() {
    this.userApiClient
      .create(
        new CreateUserCommand({
          name: this.userName,
          company: this.userCompany
        })
      )
      .pipe(
        tap(() => {
          this.getUsers();
        })
      )
      .subscribe();
  }
}
