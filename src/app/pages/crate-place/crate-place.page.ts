import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreatePlaceFormGroup } from 'src/app/forms/CreatePlace';

@Component({
  selector: 'app-crate-place',
  templateUrl: './crate-place.page.html',
  styleUrls: ['./crate-place.page.scss'],
  imports: [CommonModule,IonicModule, ReactiveFormsModule],
})
export class CratePlacePage {
  public form: FormGroup;

  constructor() {
    this.form = CreatePlaceFormGroup();
  }

  onSubmit() {
    //verifica se ta retornando os values do form e imprime
    if (this.form.valid) {
      const name = this.form.get('name')?.value;
      const city = this.form.get('city')?.value;
      const about = this.form.get('about')?.value;
      const visitable = this.form.get('visitable')?.value;
      const foto = this.form.get('foto')?.value;

      const loginData = {
        name,
        city,
        about,
        visitable,
        foto,
      };
      console.log(loginData);
    } else {
      console.log('erro!');
    }
  }
}
