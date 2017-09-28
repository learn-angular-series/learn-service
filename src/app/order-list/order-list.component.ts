import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user-list.service';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [UserListService] //如果你在这里提供了providers配置，UserListService就不是全局单例了
})
export class OrderListComponent implements OnInit {
  public userList:Array<any>;
  
  constructor(
    private userListService:UserListService
  ) { }

  ngOnInit() {
    this.getList();
  }

  public getList():void{
    this.userList=this.userListService.getUserList();
  }
}
