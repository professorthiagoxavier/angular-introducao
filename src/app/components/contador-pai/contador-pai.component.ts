import { Component } from '@angular/core';
import { ClickButtonFilhoComponent } from '../click-button-filho/click-button-filho.component';

@Component({
  selector: 'app-contador-pai',
  standalone: true,
  imports: [ClickButtonFilhoComponent],
  templateUrl: './contador-pai.component.html',
  styleUrl: './contador-pai.component.css'
})
export class ContadorPaiComponent {
  total: number = 0;

  contador(): void{
      this.total++;
  }

}
