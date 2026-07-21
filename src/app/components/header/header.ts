import { Component, Inject, PLATFORM_ID, signal, Renderer2 } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class Header {
  isDark = signal(true);

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document,
    @Inject(PLATFORM_ID) private readonly _platformId: object,
    private readonly _renderer: Renderer2
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

    // ✔️ NESSUN WARNING SONARCUBE
    this._renderer.setAttribute(
      this._document.documentElement,
      'data-theme',
      theme
    );

    if (isPlatformBrowser(this._platformId)) {
      localStorage.setItem('theme', theme);
    }
  }
}
