import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyphotoService {

  constructor(
    private http: HttpClient
  ) { }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }
}
