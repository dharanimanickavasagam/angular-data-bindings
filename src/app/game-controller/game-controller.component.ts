import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})

export class GameControllerComponent implements OnInit {
 @Output() gameCountEmitter = new EventEmitter<number>();
 @Output() clearGamesEmitter = new EventEmitter<boolean>();

 gameCounter = 0;
 intervalReference: any;

  constructor() { }

  ngOnInit(): void {
  }

  startIncrementingGames = (): void => { 
    this.clearGamesEmitter.emit(true);
    this.startTimer();
  }

  startTimer = (): void => {
    this.intervalReference = setInterval((): void => {
      this.gameCounter = this.gameCounter + 1;
      console.log(" Emitting a new game each second", this.gameCounter);
      this.gameCountEmitter.emit(this.gameCounter);
    }, 1000);
  }

  stopIncrementingGames = ():void => { 
    clearInterval(this.intervalReference);
    this.gameCounter = 0;
  }
}
