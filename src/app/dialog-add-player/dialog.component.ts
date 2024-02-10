// import { Component, OnInit } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatRippleModule } from '@angular/material/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';


// @Component({
//   selector: 'app-dialog',
//   standalone: true,
//   imports: [MatButtonModule, MatIconModule, CommonModule, FormsModule, MatButtonModule,
//     MatFormFieldModule,
//     MatIconModule,
//     MatRippleModule, ReactiveFormsModule, MatDialogClose, MatInputModule, MatDialogRef],
//   templateUrl: './dialog.component.html',
//   styleUrl: './dialog.component.scss'
// })
// export class DialogComponent implements OnInit {

//   name: string = '';

//   ngOnInit(): void {

//   }

//   constructor(public dialogRef: MatDialogRef<DialogComponent>,) { }

//   onNoClick(): void {


//   }

// }
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'; // Änderung hier
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html',
  standalone: true, // standalone-Attribut ist nicht notwendig
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule // Hier wird MatDialogModule importiert
  ]
})
export class DialogComponent implements OnInit {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {}
  
  onNoClick(): void {
    this.dialogRef.close();

  }

}
