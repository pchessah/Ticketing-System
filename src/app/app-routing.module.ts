import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAllTicketsComponent } from './admin/pages/admin-all-tickets/admin-all-tickets.component';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { AdminSignInComponent } from './admin/pages/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './admin/pages/admin-sign-up/admin-sign-up.component';
import { AdminSingleTicketComponent } from './admin/pages/admin-single-ticket/admin-single-ticket.component';
import { AdminAuthGuard } from './shared/libs/guards/admin-auth.guard';
import { AuthGuard } from './shared/libs/guards/auth.guard';
import { AllTicketsComponent } from './users/pages/all-tickets/all-tickets.component';
import { DashboardComponent } from './users/pages/dashboard/dashboard.component';
import { FaqComponent } from './users/pages/faq/faq.component';
import { ForgortPasswordComponent } from './users/pages/forgort-password/forgort-password.component';
import { RaiseTicketComponent } from './users/pages/raise-ticket/raise-ticket.component';
import { SignInComponent } from './users/pages/sign-in/sign-in.component';
import { SignUpComponent } from './users/pages/sign-up/sign-up.component';
import { SingleTicketComponent } from './users/pages/single-ticket/single-ticket.component';


const routes: Routes = [
  //ADMIN ROUTES
  { path: "admin-sign-in", component: AdminSignInComponent },
  { path: "admin-sign-up", component: AdminSignUpComponent},
  { path: "admin-dashboard", component: AdminDashboardComponent,canActivate:[AdminAuthGuard]},
  { path: "admin-all-tickets", component: AdminAllTicketsComponent, canActivate:[AdminAuthGuard]},
  { path: "admin-all-tickets/:id", component: AdminSingleTicketComponent, canActivate:[AdminAuthGuard]},

  //USER ROUTES
  { path: "sign-in", component: SignInComponent},
  { path: "sign-up", component: SignUpComponent },
  { path: "forgot-password", component: ForgortPasswordComponent },
  { path: "dashboard", component: DashboardComponent, canActivate:[AuthGuard] },
  { path: "raise-ticket", component: RaiseTicketComponent,  canActivate:[AuthGuard] },
  { path: "all-tickets", component: AllTicketsComponent,  canActivate:[AuthGuard] },
  { path: "all-tickets/:id", component: SingleTicketComponent,  canActivate:[AuthGuard]},
  { path: "faq", component: FaqComponent,  canActivate:[AuthGuard] },
  { path: "", redirectTo: "sign-in", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
