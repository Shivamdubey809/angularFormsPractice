import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="name" #it="ngModel" required>
    <p>Value: {{ name }}</p>
    <p>Valid: {{ it.valid }}</p>
    <button (click)="setValue()">Set value</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = '';
  
  setValue() { this.name = 'fuck you'; console.log(this); }
}