import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class SesionStorageService {

constructor() { }




@Injectable()
export class DataService
{
  storage:User[];

  constructor()
  {
    this.storage = new Array<User>();
  }

  getUsers()
  {
    this.storage = JSON.parse(localStorage.getItem('storage'));

    if(localStorage.getItem('storage') === null)
    {
      this.storage = [{"firstName":"Test", "lastName":"Test", "userName":"test", "password":"test"}];
    }
    else if(this.storage.length == 0)
    {
      this.storage = [{"firstName":"Test", "lastName":"Test", "userName":"test", "password":"test"}];
    }
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