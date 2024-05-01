import { Injectable } from '@angular/core'; //importar o decorator Injectable
import { Cliente } from '../interfaces/Cliente'; //injetar a interface Cliente
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

//Importante notar que este decorator torna a classe injetável
@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; //URL da API

  // Criar uma lista de clientes
  // clientes: Cliente[] = [
  //   { id: "dfafs", nome: 'John Doe', telefone: '123456789'},
  //   { id: "ddsaf", nome: 'Jane Smith'}
  // ];

  constructor(private http: HttpClient) { 
  }

  //método para retornar a lista de clientes
  list(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>;
  }

  getById(id: string): Observable<Cliente> {
    console.log(`${this.apiUrl}/${id}`);
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`) as Observable<Cliente>;
  }

  //método para remover um cliente da lista
  remove(id:string) {
    // const cliente = this.clientes.find(c => c.id === id);
    //if (cliente) {
      console.log(`${this.apiUrl}/${id}`)
      return this.http.delete(`${this.apiUrl}/${id}`);
      // const index = this.clientes.indexOf(cliente);
      // this.clientes.splice(index, 1);
    //}
  }

  //método para adicionar um cliente na lista
  add(cliente: Cliente) {
    const httpHeaders = 
    {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post(this.apiUrl, cliente, httpHeaders);
    //this.clientes.push(cliente);
    //console.log(this.clientes);
  }

  update(cliente: Cliente) {
    const httpHeaders = 
    {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log(cliente)
    console.log(`${this.apiUrl}/${cliente.id}`)
    return this.http.put(`${this.apiUrl}/${cliente.id}`, cliente, httpHeaders);
  }
  
 
}
