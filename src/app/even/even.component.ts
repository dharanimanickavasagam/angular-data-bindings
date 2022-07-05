import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})

export class EvenComponent implements OnInit {

 @Input() gameCount: number = -1;
  evenGames: number[] = [];
  constructor() {
    console.log(this.evenGames)
   }

  ngOnInit(): void {
    this.evenGames.push(this.gameCount);
  }
}
