import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  releases: any[] = []

  constructor(private _spotify: SpotifyService) {
    this._spotify.getNewReleases()
                 .subscribe((data: any) => {
                   console.log(data.albums.items);
                    this.releases = data.albums.items
                 })
  }

}
