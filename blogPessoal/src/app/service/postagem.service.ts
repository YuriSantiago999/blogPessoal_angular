import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token= {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token)
  }

  //getByIdPostagem(id: number) {
    //return this.http.get(`http://localhost:8080/postagens/${id}`, this.token)
 // }

 // postPostagem(postagem: Postagem) {
    //return this.http.post('http://localhost:8080/postagens', postagem, this.token)
 // }

}
