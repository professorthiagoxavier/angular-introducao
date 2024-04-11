import { Injectable } from '@angular/core'; //importar o decorator Injectable
import { Cliente } from '../interfaces/Cliente'; //injetar a interface Cliente

//Importante notar que este decorator torna a classe injetável
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  // Criar uma lista de clientes
  clientes: Cliente[] = [
    { id: "dfafs", nome: 'John Doe', telefone: '123456789'},
    { id: "ddsaf", nome: 'Jane Smith'}
  ];

  constructor() { 
  }

  //método para retornar a lista de clientes
  list(): Cliente[] {
    return this.clientes;
  }

  //método para remover um cliente da lista
  remove(id:string) {
    const cliente = this.clientes.find(c => c.id === id);
    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
    }
  }

  //método para adicionar um cliente na lista
  add(cliente: Cliente) {
    this.clientes.push(cliente);
    console.log(this.clientes);
  }
 
}
