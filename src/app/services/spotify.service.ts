import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) {
    console.log('Spotify service ready')
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDOSm14OqPXNLPyteBRudLujKisQQu-VkLWuEYrT1TmMpITws5JblGrbN-xxiMt4DP32ebato5eqjNT8PQ'
    })

    this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
              .subscribe(data => {
                console.log(data)
              })
  }
}
