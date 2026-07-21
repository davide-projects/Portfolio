import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly langService = inject(LanguageService);
  protected readonly nome = "Davide";
}
