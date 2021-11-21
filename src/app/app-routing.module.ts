import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GuestsComponent } from './guests/guests.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'guests', pathMatch: 'full' },
      { path: 'guests', component: GuestsComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'staff', component: StaffComponent },
    ],
  },
  { path: 'error', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
