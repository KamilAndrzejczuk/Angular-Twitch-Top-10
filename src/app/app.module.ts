import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopGamesListComponent } from './components/top-games-list/top-games-list.component';
import { TopGameComponent } from './components/top-game/top-game.component';
import { StreamsListComponent } from './components/streams-list/streams-list.component';
import { StreamComponent } from './components/stream/stream.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopGamesListComponent,
    TopGameComponent,
    StreamsListComponent,
    StreamComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
