import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTicketsComponent } from './users/pages/all-tickets/all-tickets.component';
import { DashboardComponent } from './users/pages/dashboard/dashboard.component';
import { FaqComponent } from './users/pages/faq/faq.component';
import { ForgortPasswordComponent } from './users/pages/forgort-password/forgort-password.component';
import { RaiseTicketComponent } from './users/pages/raise-ticket/raise-ticket.component';
import { SignInComponent } from './users/pages/sign-in/sign-in.component';
import { SignUpComponent } from './users/pages/sign-up/sign-up.component';


const routes: Routes = [
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forgot-password", component: ForgortPasswordComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "raise-ticket", component: RaiseTicketComponent },
  { path: "all-tickets", component: AllTicketsComponent },
  { path: "faq", component: FaqComponent },
  { path: "", redirectTo: "sign-in", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
