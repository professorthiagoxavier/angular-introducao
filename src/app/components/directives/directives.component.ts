import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size = 50;
  font = 'Arial';
  color = 'yellow';

  isActive = true;
  hasError = true

  classes =["text-success", "text-danger", "text-special"]
  isSpecial = true; 

  //ngModel
  currentItem: any = {
    name: ''
  };

  setUppercaseName(value: string) {
    this.currentItem.name = value.toUpperCase();
  }
}
