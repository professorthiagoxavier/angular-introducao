import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-into-component',
  standalone: true,
  imports: [],
  templateUrl: './into-component.component.html',
  styleUrl: './into-component.component.css'
})
export class IntoComponentComponent {
  @Input() name:string = "";
  @Input() car:any = [];

  constructor() {
  }
}
