import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {


  //exemplo 1 ativar alerta
  showMessage(): void {
    alert('Evento click disparado');
  }

  //Exemplo 2 mexer no DOM
  changeText(): void {
    let element = document.getElementById('nome') as HTMLInputElement;
    element.value = 'Texto alterado';
  }

  changeStyle(): void {
    let element = document.getElementById('nome') as HTMLInputElement;
    element.style.color = 'red';
    element.style.backgroundColor = 'black';
  }

  show = true;
  toggleVisibility(): void {
    this.show = !this.show;
  }
}
