import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent {
  openGitHubRepo(): void {
    window.open('https://github.com/PogilPlugin/MicrosoftWordPlugin', '_blank');
  }
}
