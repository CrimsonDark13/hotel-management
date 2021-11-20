import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestsComponent } from './guests/guests.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'sidebar', component: SidebarComponent},
  
  { 
    path:'dash-layout', component: DashboardLayoutComponent, children: [
      { path:'guests', component: GuestsComponent},
      { path:'rooms', component: RoomsComponent},
      { path: 'aboutus', component: AboutusComponent},
      { path:'bookings', component: BookingsComponent},
      { path:'staff', component: StaffComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
