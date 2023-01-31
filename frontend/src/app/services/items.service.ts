import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_items } from 'src/data';
import { ITEMS_BY_ID_URL, ITEMS_BY_SEARCH_URL, ITEMS_URL } from '../shared/constants/urls';
import { items } from '../shared/models/items';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<items[]>{
    return this.http.get<items[]>(ITEMS_URL);

  }

  getAllItemsBySearchTerm(searchTerm:string){
    return this.http.get<items[]>(ITEMS_BY_SEARCH_URL + searchTerm);
  }


  getItemById(itemId:string):Observable<items>{
    return this.http.get<items>(ITEMS_BY_ID_URL + itemId);
  }

}