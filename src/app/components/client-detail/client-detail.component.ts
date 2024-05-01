import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {
  clienteForm: FormGroup = new FormGroup({}); //criar um formulário
  cliente?: Cliente;

  //Quando o componente é instanciado, o Angular injeta o serviço ClienteService
  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder, private route: ActivatedRoute) {

    this.getClientById();
  }

  getClientById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.clienteService.getById(id).subscribe((cliente) => (this.cliente = cliente));

    this.clienteForm = this.formBuilder.group({
      nome: [this.cliente?.nome],
      telefone: [this.cliente?.telefone],
      id: [this.cliente?.id]
    }); //criar um formulário com os campos nome e telefone
  }
  ngOnInit(): void {
  }

//método para gerar uma string aleatória
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  update(): void {
    if (this.clienteForm.valid) {
      const clienteAdd: Cliente = {
        id: this.clienteForm.value.id,
        nome: this.clienteForm.value.nome,
        telefone: this.clienteForm.value.telefone
      };

      this.clienteService.update(clienteAdd).subscribe();
      alert('Atualizado com sucesso!')
    }
  }
}
