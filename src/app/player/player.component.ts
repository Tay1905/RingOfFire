import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() name: string = '';
  @Input() playerActive: boolean = false;
  // @Input() playerId: number = 0;


  // delete(playerId: number): void {
  //   // Implementiere hier die Löschlogik
  //   console.log('Spieler gelöscht:', this.name);

  //   // Fügen Sie hier die Löschlogik hinzu, z.B. das Entfernen des Spielers aus einer Liste oder das Auslösen eines Ereignisses zum Löschen
  // }
}
// export class PlayerComponent {
//   @Input() name: any = '';
//   @Input() players: any[] = []; // Annahme: players ist das Array der Spieler


//   delete(name: any): void {
//     // Löschlogik: Finden Sie den Index des Spielers im Array
//     const index = this.players.findIndex((name: any) => name.id === name);
    
//     // Wenn der Spieler gefunden wurde, entfernen Sie ihn aus dem Array
//     if (index !== -1) {
//       this.name.splice(index, 1);
//       console.log('Spieler gelöscht:', name);
//     } else {
//       console.log('Spieler nicht gefunden:', name);
//     }
//   }
// }
