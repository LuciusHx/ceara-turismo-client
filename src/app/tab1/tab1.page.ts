import { Component, Input } from '@angular/core';
import { CardsHomeService } from '../services/cards-home.service';
import { City } from '../interfaces/City';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  
  cards: City[] = []; 

  //inicializa serviços ou outras classes necessárias para o componente 
  constructor(private cardsHomeService: CardsHomeService) {}
 
  //bom para Lógica de inicialização (ex puxar dados de um API)
  ngOnInit(): void {
    this.cards = this.cardsHomeService.getPlaces();
  }
}
