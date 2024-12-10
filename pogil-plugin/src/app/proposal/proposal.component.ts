import { Component } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent {
  downloadProposal(): void {
    const link = document.createElement('a');
    link.href = './proposal.pdf';
    link.download = 'Proposal.pdf';
    link.click();
  }
}
