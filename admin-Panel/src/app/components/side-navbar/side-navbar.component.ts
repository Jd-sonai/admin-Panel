import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faShapes } from '@fortawesome/free-solid-svg-icons';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-navbar',
  imports: [MatIconModule,FontAwesomeModule,MatSidenavModule, MatListModule, CommonModule, MatToolbarModule, MatButtonModule,MatBadgeModule,
            MatInputModule,MatFormFieldModule
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {

  firstIcon = faHouseChimney;
  secondIcon = faGift;
  thirdIcon = faBox;
  fourthIcon = faListCheck;
  fifthIcon = faIcons;
  sixthIcon = faShapes;
  sevenIcon = faGear;
  eightIcon = faUser;
  menuIcon = faBars;
}
