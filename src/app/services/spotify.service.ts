import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private _http: HttpClient) {
    console.log('Spotify service ready')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBRD2OowPo-M0wy96P95D1Ax1CYo_QyB2hrhwNut8DnAUC4gbA-t6TrT0Z1To0Uh7cJNnLG1JmmkTmAN7s'
    })

    return this._http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
               .pipe(map (data => data['albums'].items))
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
               .pipe(map (data => data['artists'].items))
  }
}
