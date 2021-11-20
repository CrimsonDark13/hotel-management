import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomsComponent } from './rooms/rooms.component';
import { GuestsComponent } from './guests/guests.component';
import { BookingsComponent } from './bookings/bookings.component';
import { StaffComponent } from './staff/staff.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RoomsComponent,
    GuestsComponent,
    BookingsComponent,
    StaffComponent,
    SidebarComponent,
    DashboardLayoutComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
