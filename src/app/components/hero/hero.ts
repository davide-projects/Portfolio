import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
})
export class Hero {
  nome: string = "Davide";
  ruolo: string = "Junior Full Stack Developer"
}
