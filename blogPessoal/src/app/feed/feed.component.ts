import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key= 'data'
  reverse= true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  titulo: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

 



  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private router: Router,
    private alerta: AlertasService,
    
      
    
    
  ) { }

  ngOnInit()  {
    let token = environment.token
    if(token==''){
      this.router.navigate(['/login'])
      this.alerta.showAlertDanger('Faça o login para poder entrar')
    }
    window.scroll(0, 0)
    this.findAllPostagens()
    this.findAllTemas()
    

    
  }
  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens= resp


    })
    
    


  }
  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas =resp


    })


  }
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema =resp;


    })


  }

  findByTituloPostagem(){
    if(this.titulo===''){
      this.findAllPostagens()
    }else{
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[])=>{
        this.listaPostagens=resp
      })
    }
  }
  findByNomeTema(){
    if(this.nomeTema===''){
      this.findAllTemas()
    }else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>{
        this.listaTemas= resp
      })
    }
  }
  postar(){

    this.tema.id= this.idTema
    this.postagem.tema=this.tema

    if(this.postagem.titulo==null || this.postagem.texto==null || this.postagem.tema==null){
      

      this.alerta.showAlertDanger('Preencha tds os campos antes de postar')
    }else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
        this.postagem=resp
        this.postagem= new Postagem()
        this.alerta.showAlertDark('Postado com sucesso')
        this.findAllPostagens()
  
  
      })
    }
  }
  



}
   
  


