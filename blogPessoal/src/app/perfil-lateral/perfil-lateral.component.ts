import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  nome: String;
  constructor() { }

  ngOnInit(): void {
    this.nome = 'Yuri Santiago'
  }
  

    
  

}
