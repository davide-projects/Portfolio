import { Component, Inject, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class Header {
  readonly langService = inject(LanguageService);
  isDark = signal(true);

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document,
    @Inject(PLATFORM_ID) private readonly _platformId: object,
  ) {
    if (isPlatformBrowser(this._platformId)) {
      const saved = localStorage.getItem('theme');
      if (saved === 'portfolio-light') {
        this.isDark.set(false);
      }
    }
  }

  toggleTheme() {
    this.isDark.update(v => !v);
    const theme = this.isDark() ? 'portfolio' : 'portfolio-light';
    this._document.documentElement.dataset['theme'] = theme;

    if (isPlatformBrowser(this._platformId)) {
      localStorage.setItem('theme', theme);
    }
  }
}
