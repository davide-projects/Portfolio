import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { type Language, type TranslationKey, it, en } from './translations';

const dict: Record<Language, Record<TranslationKey, string>> = { it, en };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _currentLang = signal<Language>('it');
  private readonly _isBrowser: boolean;
  readonly lang = this._currentLang.asReadonly();
  readonly t = computed(() => dict[this._currentLang()]);

  constructor() {
    this._isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    if (this._isBrowser) {
      const saved = localStorage.getItem('lang') as Language | null;
      if (saved === 'en') {
        this._currentLang.set('en');
      }
    }
  }

  switchLang(lang: Language) {
    this._currentLang.set(lang);
    if (this._isBrowser) {
      localStorage.setItem('lang', lang);
    }
  }

  translate(key: TranslationKey): string {
    return dict[this._currentLang()][key];
  }
}
