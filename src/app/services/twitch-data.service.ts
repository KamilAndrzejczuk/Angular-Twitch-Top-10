import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { clientID } from '../../../twitchConfig';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitchDataService {
  baseURL = 'https://api.twitch.tv'
  top10Games = [];

  constructor(private http: HttpClient) { }

  getTop10Games(): Observable<Object> {
    return this.http.get(`${this.baseURL}/helix/games/top?first=10`, { headers: { 'Client-ID': clientID } })
      .pipe(map(res => res['data']));
  }
  getTop10Streams(gameID) {
    
    return this.http.get(`${this.baseURL}//helix/streams?first=10`, { headers: { 'Client-ID': clientID } })
      .pipe(map(res =>{ console.log(res['data']);
       return res['data']}));
  }

  getImage(imageURL) {
    let imageWidth = 2100;
    let imageHeight = 2100;
    let splitImageUrl = imageURL.split('');

    return `${splitImageUrl.slice(0, splitImageUrl.length - 20).join('')}${imageWidth}x${imageHeight}.jpg`;
  }

}
