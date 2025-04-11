import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormGroup } from 'src/app/forms/Login';
import { AuthService } from 'src/app/services/auth-guard.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class Tab3Page {
  public form: FormGroup;

  constructor(public authService: AuthService, private router: Router) {
    this.form = LoginFormGroup();
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit() {
    //verifica se ta retornando os values do form e imprime
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      const loginData = {
        email,
        password,
      };
      console.log(loginData);

      // lógica de login
      this.authService.login();
      this.router.navigate(['tabs/tab1']);
    } else {
      console.log('erro!');
    }
  }
}
