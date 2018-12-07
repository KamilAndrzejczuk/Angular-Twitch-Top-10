import { TwitchDataService } from './../../services/twitch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-games-list',
  templateUrl: './top-games-list.component.html',
  styleUrls: ['./top-games-list.component.css']
})
export class TopGamesListComponent implements OnInit {
  top10games$;
  constructor(private twitchDataService: TwitchDataService) {

   }
   
  ngOnInit() {
    this.top10games$ = this.twitchDataService.getTop10Games();
  }   

}
