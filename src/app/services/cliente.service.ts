import { Injectable } from '@angular/core';

//Importante notar que este decorator torna a classe injetável
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor() { }
}
