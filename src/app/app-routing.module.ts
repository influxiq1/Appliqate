import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {ContactComponent} from '../app/contact/contact.component'
import {ServicesComponent} from '../app/services/services.component'
import {CompaffiliatesComponent} from '../app/compaffiliates/compaffiliates.component'
import {BlockchainComponent} from '../app/blockchain/blockchain.component'
import {OurteamComponent} from '../app/ourteam/ourteam.component'


 
import { FaqComponent } from './faq/faq.component';
import { NewsReleasesComponent } from './news-releases/news-releases.component';
import { SECFilingsComponent } from './sec-filings/sec-filings.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { LetterToShareholdersComponent } from './letter-to-shareholders/letter-to-shareholders.component';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'services', component: ServicesComponent},
  {path:'compaffiliates', component: CompaffiliatesComponent},
  {path:'blockchain', component: BlockchainComponent},
  {path:'ourteam', component: OurteamComponent},


  {path:'faq', component: FaqComponent},
  {path:'news-releases', component: NewsReleasesComponent},
  {path:'SEC-filings', component: SECFilingsComponent},
  {path:'management_team', component: ManagementTeamComponent},
  {path:'letter-shareholders', component: LetterToShareholdersComponent},
  {path:'company-overview', component: CompanyOverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
