import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog-add-player/dialog.component';
import { GameInfoComponent } from '../game-info/game-info.component';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,PlayerComponent, MatIconModule, MatButtonModule, GameInfoComponent],
  providers: [MatDialog],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit {

  constructor(public dialog: MatDialog){
  
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);
  
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
      this.game.players.push(name);
        
      }
    });
  }
  

  takeCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  ngOnInit(): void {
    this.newGame();
  }



  newGame() {
    this.game = new Game();
    console.log(this.game);
  }


  takeCard() {
    if (!this.takeCardAnimation) {
      if (this.game.stack.length > 0) {
        this.currentCard = this.game.stack.pop()!;
        this.takeCardAnimation = true;
        // console.log('New card: ' + this.currentCard);
        // console.log(this.game);

       
        this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        
        setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
          this.takeCardAnimation = false;
        }, 1000);
      }
    }
  }
}