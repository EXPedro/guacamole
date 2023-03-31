import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {

  @Input() subtitle: string = ""
//Teste de Tipos de Myers-Briggs
  constructor(){}

  ngOnInit(): void {

  }

}
