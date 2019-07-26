import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ServicesComponent } from './services/services.component';
import { CompaffiliatesComponent } from './compaffiliates/compaffiliates.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurteampopupComponent } from './ourteampopup/ourteampopup.component';
import { SubmitpopupComponent } from './submitpopup/submitpopup.component';

import { MetaModule } from '@ngx-meta/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    CompaffiliatesComponent,
    BlockchainComponent,
    OurteamComponent,
    OurteampopupComponent,
    SubmitpopupComponent,
    // AboutusComponent,
    // ContactusComponent
  ],
  imports: [
    DemoMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,MetaModule.forRoot()
  ],
  entryComponents: [
    OurteampopupComponent,
    SubmitpopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
