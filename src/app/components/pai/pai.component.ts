import { Component } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [FilhoComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent {



  onChangeFilho() :void{
    alert('Evento disparado pelo filho');
  }
}
