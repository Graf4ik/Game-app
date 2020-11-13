import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()

export class GamesService {

    constructor(private http: HttpClient) {
    }
    
    gamesUrl = '../../assets/games.json';

    getGames() {
        return this.http.get(this.gamesUrl)
        .pipe(map((data: any) => data.games )      
        );
    }

    games = [
    {name: 'Witcher1'},
    {name: 'Witcher2'},
    {name: 'Witcher3'},
    {name: 'Witcher4'}
  ]
}