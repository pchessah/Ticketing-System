import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './users/pages/sign-in/sign-in.component';
import { SignUpComponent } from './users/pages/sign-up/sign-up.component';
import { DashboardComponent } from './users/pages/dashboard/dashboard.component';
import { NavbarComponent } from './users/components/navbar/navbar.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { MatTableModule } from '@angular/material/table';

import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgortPasswordComponent } from './users/pages/forgort-password/forgort-password.component';
import { RaiseTicketComponent } from './users/pages/raise-ticket/raise-ticket.component';
import { SingleTicketComponent } from './users/pages/single-ticket/single-ticket.component';
import { AllTicketsComponent } from './users/pages/all-tickets/all-tickets.component';
import { FaqComponent } from './users/pages/faq/faq.component';

const MDB_MODULES = [
  MdbCarouselModule,
  MdbCheckboxModule,
  MdbCollapseModule,
  MdbDropdownModule,
  MdbFormsModule,
  MdbModalModule,
  MdbPopoverModule,
  MdbRadioModule,
  MdbRangeModule,
  MdbRippleModule,
  MdbScrollspyModule,
  MdbTabsModule,
  MdbTooltipModule,
  MdbValidationModule,]

const MAT_MODULES = [
  MatTableModule,
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    NavbarComponent,
    ForgortPasswordComponent,
    RaiseTicketComponent,
    SingleTicketComponent,
    AllTicketsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
        ReactiveFormsModule,
    ...MDB_MODULES,
    ...MAT_MODULES,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
