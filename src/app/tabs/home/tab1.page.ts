import { Component } from '@angular/core';
import { CardsHomeService } from '../../services/cards-home.service';
import { Places } from '../../class/places';
import { AuthService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  cards: Places[] = [];

  // inicializa serviços ou outras classes necessárias para o componente
  constructor(private cardsHomeService: CardsHomeService, public authService: AuthService) {}

  // lógica de inicialização
  ngOnInit(): void {
    this.cardsHomeService.getPlaces().subscribe((data) => {
      this.cards = data.map((item) => {
        return new Places(
          item.foto,
          item.name,
          item.city,
          item.about,
          item.visitable
        );
      });
    });
  }

  if(){}

}
