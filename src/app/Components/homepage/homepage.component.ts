import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [GamesService]
})
export class HomepageComponent implements OnInit {

  size = 8;

  games = [];
  searchStr = '';
  totalRecords: String;
  page: Number = 1;

  reverse:boolean = false;
  name: string = 'Name.en';
  LaunchCode: string = 'LaunchCode'

  constructor(private gamesService: GamesService) {}
  

  ngOnInit() {
    this.gamesService.getGames().subscribe(games => {
      this.games = games
      this.totalRecords = games.length
    })
  }

  setSize(size) {
    this.size = size;
  }

  onChange() {
    this.setSize(this.size)
  }

  
    sortType(sort:string) {
    if (sort === 'name') {
      this.games = this.games.sort(this.sortByGames);
      console.log(this.games);
    }
  }
  sortByGames(g1, g2) {
    if(g1.name > g2.name) return 1
    else if(g1.name === g2.name) return 0
    else return -1
  }
}
