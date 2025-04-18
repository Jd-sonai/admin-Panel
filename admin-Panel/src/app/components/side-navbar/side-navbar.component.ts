import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faShapes } from '@fortawesome/free-solid-svg-icons';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-navbar',
  imports: [MatIconModule,FontAwesomeModule],
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
}
