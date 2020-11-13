import { Component } from '@angular/core';
import { GamesService } from './games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GamesService]
})

export class AppComponent {
 
}

