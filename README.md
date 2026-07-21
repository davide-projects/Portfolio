<div align="center">

### 📘 Portfolio
 
### Portfolio personale realizzato con Angular, Tailwind CSS e DaisyUI
 
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com)
[![Vitest](https://img.shields.io/badge/Vitest-tested-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
 
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/made%20with-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
 
</div>
---
 
## 📖 Indice
 
- [✨ Descrizione](#-descrizione)
- [📋 Contenuti](#-contenuti)
- [🧰 Stack Tecnologico](#-stack-tecnologico)
- [✅ Prerequisiti](#-prerequisiti)
- [⚙️ Installazione](#️-installazione)
- [🚀 Sviluppo](#-sviluppo)
- [📦 Build](#-build)
- [🧪 Test](#-test)
- [📁 Struttura del progetto](#-struttura-del-progetto)
- [📄 Licenza](#-licenza)
---
 
## ✨ Descrizione
 
Portfolio personale con **tema chiaro/scuro**, **supporto multilingua (IT/EN)**, palette coerente e design moderno, costruito su uno stack Angular 21 + Tailwind CSS v4 + DaisyUI v5.
 
## 📋 Contenuti
 
| Sezione | Descrizione |
|---|---|
| 🎯 **Hero** | Presentazione con nome e ruolo |
| 🛠️ **Skill Cards** | Competenze Frontend, Backend e Framework con hover animati |
| 🌐 **Language Switcher** | Toggle italiano/inglese con bandiere |
| 🌓 **Theme Toggle** | Passaggio tema chiaro/scuro con animazione fluida |
| 📄 **Footer** | Credits dinamici con anno corrente |
 
## 🧰 Stack Tecnologico
 
- ⚡ **Angular 21** — framework lato client
- 🎨 **Tailwind CSS v4** — utility-first CSS
- 🌼 **DaisyUI v5** — component library
- 🌐 **i18n custom** — servizio lingue con signal (IT/EN)
- 🧪 **Vitest** — test runner
## ✅ Prerequisiti
 
Prima di iniziare, assicurati di avere installato:
 
- **Node.js** `>= 20.x`
- **npm** `>= 10.x` (oppure `pnpm` / `yarn`)
- **Angular CLI** `>= 21.x`
```bash
npm install -g @angular/cli
```
 
## ⚙️ Installazione
 
Clona il repository e installa le dipendenze:
 
```bash
git clone https://github.com/<tuo-username>/PortfolioAngular.git
cd PortfolioAngular
npm install
```
 
## 🚀 Sviluppo
 
Avvia il server di sviluppo locale:
 
```bash
ng serve
```
 
L'applicazione sarà disponibile su [`http://localhost:4200/`](http://localhost:4200/). L'app si ricarica automaticamente ad ogni modifica ai file sorgente.
 
## 📦 Build
 
Compila il progetto per la produzione:
 
```bash
ng build
```
 
Gli artefatti di build vengono salvati nella cartella `dist/`.
 
## 🧪 Test
 
Esegui i test unitari con **Vitest**:
 
```bash
ng test
```
 
## 📁 Struttura del progetto
 
```
PortfolioAngular/
├── public/
│   └── flags/                # bandiere per il language switcher
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/       # navbar sticky + theme toggle + lingue
│   │   │   ├── hero/
│   │   │   ├── skills/
│   │   │   └── footer/
│   │   ├── services/
│   │   │   └── language/     # LanguageService + dizionario IT/EN
│   │   └── ...
│   ├── styles.css            # temi DaisyUI custom + transition
│   └── index.html
├── dist/
├── angular.json
├── package.json
└── README.md
```
 
 
<div align="center">
Realizzato con **Angular**
 
⭐️ Se questo progetto ti piace, lascia una **stella** su GitHub!
 
</div>