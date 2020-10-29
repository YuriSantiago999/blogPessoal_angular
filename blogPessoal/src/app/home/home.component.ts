
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{faFacebook}from'@fortawesome/free-brands-svg-icons'
import{faInstagram}from'@fortawesome/free-brands-svg-icons'
import{faLinkedin}from'@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  faFacebook=faFacebook
  faInstagram=faInstagram
  faLinkedin=faLinkedin
  constructor() { }

  ngOnInit(): void {
  }

}
