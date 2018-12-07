import { TwitchDataService } from './../../services/twitch-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  @Input() stream;
  constructor(private twitchDataService: TwitchDataService) { }

  ngOnInit() {
    
  }

  getImage(url) {
    return this.twitchDataService.getImage(url);
  }

}
