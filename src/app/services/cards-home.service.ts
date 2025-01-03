import { Injectable, Output } from '@angular/core';
import { City } from '../interfaces/City';


@Injectable({
  providedIn: 'root'
})
export class CardsHomeService {

  constructor() { }

  private places : City[] = [
    {
      alt: 'Praia de Iracema',
      src: '../../assets/images/fortaleza iracema.jpg',
      title: 'Iracema',
      city: 'Fortaleza - Ceará',
      about: 'A Praia de Iracema é uma praia de bairro homônimo localizados na zona central do município de Fortaleza, no estado do Ceará. Seu nome vem da personagem Iracema, do escritor cearense José de Alencar.',
      visitable: true,
    },
    {
      alt:'Estádio Castelão',
      src:'../../assets/images/castelao.jpg',
      title:'Castelão',
      city:'Fortaleza - Ceará',
      about: ' O Estádio Governador Plácido Castelo, também conhecido como Arena Castelão, é um estádio de futebol brasileiro localizado em Fortaleza, inaugurado em 1973. Sua capacidade atual é de até 63.903 espectadores.',
      visitable: true,
    }, 
    {
      alt: 'Parque Nacional de Ubajara',
      src:'../../assets/images/parque nacional ubj.jpg',
      title:'Parque Nacional de Ubajara',
      city: 'Ubajara - Ceará',
      about: 'O Parque Nacional de Ubajara é Unidade de Conservação de Proteção Integral localizada na região da Serra da Ibiapaba, no estado do Ceará, Brasil. A grande atração do Parque Nacional de Ubajara é a Gruta de Ubajara.',
      visitable: false,
    },
    {
      alt: 'Praia de Camocim',
      src: '../../assets/images/camocim.jpg',
      title: 'Praia de Maceió',
      city: 'Camocim - Ceará',
      about: 'Camocim é um município brasileiro no estado do Ceará. Localiza-se na região intermediária de Sobral, tendo como seus limites territoriais os municípios de Barroquinha, Bela Cruz, Granja e Jijoca de Jericoacoara.',
      visitable: true,
    }
  ]

  public getPlaces(): City[] {
    return this.places
  }
}
