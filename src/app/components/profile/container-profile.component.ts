import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { User } from '../../model/User';


@Component({
  selector: 'app-container-profile',
  templateUrl: './container-profile.component.html',
  styleUrls: ['./container-profile.component.scss']
})
export class ContainerProfileComponent implements OnInit {

  users: User[] = [];
  constructor(private dataSvc: DataService){}

  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void {
    this.dataSvc.getAllUsers()
    .pipe(
      tap((users: User[]) => this.users = users)
    ).subscribe()
  }
}
