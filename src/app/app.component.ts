import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'gameController';
  evenGames: number[]= [];
  oddGames: number[] = [];

  constructor() {

  }

  clearGamesEmitter = (event: any) => { 
    console.log('received', event);
    this.evenGames = [];
    this.oddGames =[];
  }

  gameCountEmitter = (gameCounter : number) => {
    console.log('received', gameCounter);
    gameCounter % 2 == 0 ? this.evenGames.push(gameCounter) : this.oddGames.push(gameCounter);
  }
}
