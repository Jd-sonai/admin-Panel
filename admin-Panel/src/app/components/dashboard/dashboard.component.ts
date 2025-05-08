import { Component } from '@angular/core';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [SideNavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
