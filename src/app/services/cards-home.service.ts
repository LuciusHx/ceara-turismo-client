import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Places } from '../class/places';

@Injectable({
  providedIn: 'root'
})
export class CardsHomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private url = "http://127.0.0.1:8000/"


  getPlaces(): Observable<Places[]> {
    return this.httpClient.get<Places[]>(`${this.url}/places/`).pipe(
      map((places: Places[]) => {
        return places.map(place => {
          // Corrige o caminho da foto para apontar para o backend
          const correctedFoto = place.foto 
            ? `${this.url}${place.foto}` 
            : 'assets/imgs/default-place.jpg';
          
          return {
            ...place,
            foto: correctedFoto
          };
        });
      })
    );
  }
}
