import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
})
export class Skills {
  readonly langService = inject(LanguageService);
  frontendSkills = ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'DaisyUi'];
  backendSkills = ['PHP', 'Java', 'C#', 'Python'];
  frameworkSkills = ['Laravel', 'Spring Boot', '.NET', 'Angular'];
}
