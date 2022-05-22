import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import { User } from '../../models/user'
import { Router} from '@angular/router';

@Component({
  selector: 'app-figure-list',
  templateUrl: './figure-list.component.html',
  styleUrls: ['./figure-list.component.css']
})
export class FigureListComponent implements OnInit {

  Figures: any=[];
  user= new User();
  username: string;
  name: string;
  email: string;

  constructor(
    private router: Router,
    private apiService:ApiService

    ) {
    this.readFigure();
    this.getUser();

    }

  ngOnInit(): void {
  }

  readFigure() {
    this.apiService.getFigures().subscribe((data) =>{
      this.Figures=data;
    });
  }

  getUser(){

    if (this.apiService.getCurrentuser().userName== null){
      this.router.navigate(['/login']);
    }

    this.user=this.apiService.getCurrentuser();
    this.name= JSON.stringify(this.user.name)
    this.username= JSON.stringify(this.user.userName)
    this.email= JSON.stringify(this.user.email)
  }

  logout(){
    this.user= new User()
    this.apiService.setCurrentuser(this.user);
    this.router.navigate(['/login']);
  }

  edit(index){
    let id=this.Figures[index]._id;
    this.router.navigate(['/figure-edit/:'+ id]);
  }

}
