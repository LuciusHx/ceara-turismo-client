import { Component } from '@angular/core';
import { CardsHomeService } from '../services/cards-home.service';
import { Places } from '../class/places';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  
  cards: Places[] = []; 

  //inicializa serviços ou outras classes necessárias para o componente 
  constructor(private cardsHomeService: CardsHomeService) {}
 
  //bom para Lógica de inicialização (ex puxar dados de um API)
  ngOnInit(): void {
    this.cardsHomeService.getPlaces().subscribe(
      data => {
        this.cards = data.map(item => 
        {
          return new Places(
            item.foto,
            item.name,
            item.city,
            item.about,
            item.visitable,
          )
        }
        )
      }
    )
  }
}
