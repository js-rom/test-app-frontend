import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MatToolbar, MatIcon, MatNavList, RouterLink, RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
