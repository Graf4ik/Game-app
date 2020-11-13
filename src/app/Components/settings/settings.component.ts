import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { HomepageComponent } from '../homepage/homepage.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [HomepageComponent]
})
export class SettingsComponent implements OnInit {

  ngOnInit(): void {

  }
}
