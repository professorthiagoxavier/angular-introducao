import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service'; //importar o serviço ClienteService
import { Cliente } from '../../interfaces/Cliente'; //importar a interface Cliente
import { CommonModule } from '@angular/common'; //importar o módulo CommonModule para 
import { FormGroup } from '@angular/forms'; //importar o módulo FormGroup para criar um formulário
import { FormBuilder, Validators } from '@angular/forms';  //importar o módulo FormBuilder para criar um formulário
import { ReactiveFormsModule } from '@angular/forms'; //importar o módulo ReactiveFormsModule para criar um formulário

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clienteForm: FormGroup = new FormGroup({}); //criar um formulário
  clientes: Cliente[] = []; //criar uma lista de clientes

  //Quando o componente é instanciado, o Angular injeta o serviço ClienteService
  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required]
    }); //criar um formulário com os campos nome e telefone
  }

  //método para gerar uma string aleatória
  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  //inserir cliente
  insert() {
    if (this.clienteForm.valid) {
      const clienteAdd: Cliente = {
        id:this.generateRandomString(5),
        nome: this.clienteForm.value.nome,
        telefone: this.clienteForm.value.telefone
      };
      this.clienteForm.reset();
      this.clienteService.add(clienteAdd);
      alert('Inserido com sucesso!')
    }
    
  }

  //método para listar os clientes
  list(): void {
    this.clientes = this.clienteService.list();
  }

  //método para remover um cliente
  ngOnInit(): void {
    this.list();
  }

  //método para remover um cliente
  remover(id: string): void {
    this.clienteService.remove(id);
    alert('Removido com sucesso!')
  }
}
