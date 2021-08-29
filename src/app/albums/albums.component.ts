import { Component, OnInit } from '@angular/core';
import { MyphotoService } from '../myphoto.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
albums: any;
  constructor(
    private myphotoservice: MyphotoService
  ) { }

  ngOnInit(): void {
    this.albums = this.myphotoservice.getAlbums()
  }
  

}
