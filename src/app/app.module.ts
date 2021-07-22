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
// For MDB Angular Free
import { ChartsModule, WavesModule, MDBBootstrapModule } from 'angular-bootstrap-md'
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
import { AdminAllTicketsComponent } from './admin/pages/admin-all-tickets/admin-all-tickets.component';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { AdminSingleTicketComponent } from './admin/pages/admin-single-ticket/admin-single-ticket.component';
import { AdminSignInComponent } from './admin/pages/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './admin/pages/admin-sign-up/admin-sign-up.component';
import { AdminForgortPasswordComponent } from './admin/pages/admin-forgort-password/admin-forgort-password.component';
import { AdminNavbarComponent } from './admin/components/admin-navbar/admin-navbar.component';

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
    FaqComponent,
    AdminAllTicketsComponent,
    AdminDashboardComponent,
    AdminSingleTicketComponent,
    AdminSignInComponent,
    AdminSignUpComponent,
    AdminForgortPasswordComponent,
    AdminNavbarComponent
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
    ChartsModule, WavesModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
