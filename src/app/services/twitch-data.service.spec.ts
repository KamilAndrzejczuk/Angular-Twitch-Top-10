import { TestBed } from '@angular/core/testing';

import { TwitchDataService } from './twitch-data.service';

describe('TwitchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitchDataService = TestBed.get(TwitchDataService);
    expect(service).toBeTruthy();
  });
});
