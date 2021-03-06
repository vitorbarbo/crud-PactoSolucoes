import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface Table {
  name: string;
  birthDate: Date;
  classification: number;
  actions: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  ClientData!: FormGroup;
  listData: any = [];


  constructor(private form: FormBuilder) { 
  }

  ngOnInit(): void {
    this.ClientData = this.form.group({
      Nome: ['', Validators.required],
      DataNascimento: ['', Validators.required],
      Classificacao: ['', Validators.required]
    })
  }
  
  addClient(){
    this.listData.push(this.ClientData.value);
    this.ClientData.reset();
    alert("Cliente adicionado com sucesso!")
  }

  resetClient(){
    this.ClientData.reset();
  }

  removeClient(item:any){
    this.listData.forEach((v:any, i:number) =>{
      if(v == item) {
        this.listData.splice(i, 1)
        alert("Cliente removido com sucesso!")
      }
    })
  }


  /* em caso de consumo de API / endpoints seria realizada aqui uma função para requisição. Exemplo:
  
  endpoint() {
    this.service.endpointFunction().subscribe(
      (r:any) => {
        console.log("resposta da requisição", r)
      },
      (e:any) => {
        console.log("erro da requisição", e)
        
      }
    )
  }

  a função em questão chama o serviço que seria criado utilizando ng g s services/serviceName
  
  
  */
}
