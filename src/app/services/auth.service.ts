import { Injectable } from '@angular/core';

import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: Array<IUser>;

  constructor() {
    this.users = [
      {
        username: 'test',
        password: 'test',
        token: 'ASDFPOK23423P4OKFPGKSG11111111',
      },
      {
        username: 'admin',
        password: 'password',
        token: '12312wdfasfasdfasfasdfasdfASDFPOK23423P4OKFPGKSG11111111',
      },
      {
        username: 'root',
        password: 'root',
        token:
          '12312wsdfasdfasdfdfasfasdfasfasdfasdfASDFPOK23423P4OKFPGKSG11111asdasd111',
      },
    ];
  }

  logIn(credentials): void {
    let findUser: IUser = this.users.find(
      (user) => user.username === credentials.username
    );

    if (!!findUser) {
      if (
        findUser.username !== credentials.username ||
        findUser.password !== credentials.password
      ) {
        return;
      }
      if (
        findUser.username === credentials.username ||
        findUser.password === credentials.password
      ) {
        localStorage.setItem('token-mock-storage', findUser.token);
        return;
      }
    }
  }

  logOut() {
    localStorage.removeItem('token-mock-storage');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token-mock-storage');
    if (!!token) {
      let findUser = this.users.find((account) => account.token === token);
      if (findUser) {
        return true;
      }
    }
    return false;
  }
}
