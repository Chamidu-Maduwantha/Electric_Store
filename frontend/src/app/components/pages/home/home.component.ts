import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsService } from 'src/app/services/items.service';
import { items } from 'src/app/shared/models/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:items[] = [];


  constructor(private itemservice:ItemsService,activatedRoute:ActivatedRoute) {
    let foodObservable:Observable<items[]>;
    activatedRoute.params.subscribe((params)=> {
      if(params.searchTerm) 
      foodObservable = this.itemservice.getAllItemsBySearchTerm(params.searchTerm);
      else
      foodObservable = itemservice.getAll();

      foodObservable.subscribe((serverItesms)=>{
        this.items = serverItesms;
      })
    })
    
  }

  ngOnInit(): void {
  }

}
