import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class SesionStorageService {

  storage:User;

  constructor()
  {
    this.storage = new User();
  }

  getUsers()
  {
    this.storage = JSON.parse(localStorage.getItem('storage'));
    return this.storage;
  }

  addUser(user:User)
  {
    this.storage.push(user);

    let users;

    if(localStorage.getItem('storage') === null)
    {
      users = [];
      users.push(user);
      localStorage.setItem('storage', JSON.stringify(users));
    } 
    else
    {
      users = JSON.parse(localStorage.getItem('storage'));
      users.push(user);
      localStorage.setItem('storage', JSON.stringify(users));
    }
  }

  removeUser(user:User)
  {
    for(let i = 0; i < this.storage.length; i++)
    {
      if(user == this.storage[i])
      {
        this.storage.splice(i, 1);
        localStorage.setItem('storage', JSON.stringify(this.storage));
      }
    }
    return this.storage
  }
}
}