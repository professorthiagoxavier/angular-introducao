import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {

  //Criar o emissor para o component pai. 
  //Obs: o nome do emisso será eventoFilho
  @Output() eventoFilho: EventEmitter<any> = new EventEmitter();

  alterarPai(): void {
    // this.eventoFilho.emit('Evento disparado pelo filho');
    console.log("alterarPai()");
    this.eventoFilho.emit();
  }

}
