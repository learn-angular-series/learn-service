import { Injectable } from '@angular/core';

@Injectable()
export class UserListService {
  public userList:Array<any>;

  constructor() { }

  public getUserList():Array<any>{
    return this.userList;
  }

  public setUserList(newList:Array<any>):void{
    this.userList=newList;
  }
}