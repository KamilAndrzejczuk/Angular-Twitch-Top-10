import { TwitchDataService } from './../../services/twitch-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-streams-list',
  templateUrl: './streams-list.component.html',
  styleUrls: ['./streams-list.component.css']
})
export class StreamsListComponent implements OnInit {

  top10streams$;
  constructor(
    private route: ActivatedRoute, private twitchDataService: TwitchDataService) { }
  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('gameid');
    this.top10streams$ = this.twitchDataService.getTop10Streams(id);
  }

}
