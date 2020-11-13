import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameComponent } from './Components/game/game.component';
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './Components/header/header.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { SortPipe } from './sort.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';


const routes = [
  {path: '', component: HomepageComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SearchPipe,
    HeaderComponent,
    SettingsComponent,
    HomepageComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    OrderModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
