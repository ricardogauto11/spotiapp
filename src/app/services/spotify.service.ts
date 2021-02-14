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
      'Authorization': 'Bearer BQDKP2Md9K5BHGlwHpiLs-GB_-pd_7IgiY20VFCSqnedsHCK33gAMzkxQTyI-mLvOuDj3rrbrYU4xkDZLLI'
    })

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
  }
}
