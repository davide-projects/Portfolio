import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly langService = inject(LanguageService);
  protected readonly currentYear = new Date().getFullYear();
}
