import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
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
}
