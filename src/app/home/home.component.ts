import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  LISTA_SERVICOS = [
    {titulo: 'Treino do dia' },
    {titulo: 'Minha evolução' },
    {titulo: 'Ranking' },
    {titulo: 'Meu corpo' },
    {titulo: 'Meu avatar' }
  ];
}
