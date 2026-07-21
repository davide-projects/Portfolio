import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly langService = inject(LanguageService);
  frontendSkills = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  backendSkills = ['PHP', 'Java', 'C#', 'Python'];
  frameworkSkills = ['Laravel', 'Spring Boot', '.NET', 'Angular'];
}
