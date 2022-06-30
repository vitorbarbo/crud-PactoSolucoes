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
    console.log('a')
  }
  resetClient(){
    this.ClientData.reset();
  }
  removeClient(item:any){
    this.listData.forEach((v:any, i:number) =>{
      if(v == item) {
        this.listData.splice(i, 1)
      }
    })
  }
}
