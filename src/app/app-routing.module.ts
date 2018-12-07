import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopGamesListComponent } from './components/top-games-list/top-games-list.component';
import { StreamsListComponent } from './components/streams-list/streams-list.component';

const routes: Routes = [
  { path: 'home', component: TopGamesListComponent },
  { path: 'streams/:gameid', component: StreamsListComponent },
  { path: '**', component: TopGamesListComponent },

]
@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {}