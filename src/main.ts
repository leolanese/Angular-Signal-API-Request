import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ProfileComponent } from './user-profile/profile.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent],
  template: `
    <app-profile-details></app-profile-details> 
  `,
})
export class App {}

// fixing ": NullInjectorError: No provider for HttpClient!"
bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
