import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CodeComponent } from './code/code.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { ProposalComponent } from './proposal/proposal.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'code', component: CodeComponent },
  { path: 'advisor', component: AdvisorComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'team', component: TeamComponent },
];
