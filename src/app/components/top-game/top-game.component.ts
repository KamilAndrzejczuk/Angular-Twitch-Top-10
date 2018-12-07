import { TwitchDataService } from './../../services/twitch-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-game',
  templateUrl: './top-game.component.html',
  styleUrls: ['./top-game.component.css']
})
export class TopGameComponent implements OnInit {

  @Input() game: Object;

  constructor(private twitchDataService: TwitchDataService) { }

  ngOnInit() {
  }

  getTop10Streams(gameID){
    this.twitchDataService.getTop10Streams(gameID).subscribe(data => console.log(data))
  }
  getImage(url) {
    return this.twitchDataService.getImage(url);
  }
}
