import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './users/pages/dashboard/dashboard.component';
import { ForgortPasswordComponent } from './users/pages/forgort-password/forgort-password.component';
import { SignInComponent } from './users/pages/sign-in/sign-in.component';
import { SignUpComponent } from './users/pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forgot-password", component: ForgortPasswordComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "sign-in", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
